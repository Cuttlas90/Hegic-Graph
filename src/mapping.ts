import { BigDecimal, BigInt, ByteArray, Bytes, ethereum, log } from "@graphprotocol/graph-ts"
import {
  hegicEhtOption,
  Create,
  Exercise,
  Expire,
  OwnershipTransferred
} from "../generated/hegicEhtOption/hegicEhtOption"
import { AccountEntity, TransactionCreateEntity, OptionEntity } from "../generated/schema"
import {getAmount, getOptionType, getMethodId, getStrike, getPeriod} from '../src/utils'

export function handleCreate(event: Create): void {
  //load/create acount entity
  let accountEntity = AccountEntity.load(event.params.account.toHex());
  if(!accountEntity)
    accountEntity = new AccountEntity(event.params.account.toHex());

  //load/create optionType entity
  let optionEntity = OptionEntity.load(event.params.id.toHex());
  if(!optionEntity)
    optionEntity = new OptionEntity(event.params.id.toHex());

  //load/create transactionCreate entity
  let transactionCreateEntity = TransactionCreateEntity.load(event.transaction.hash.toHex());
  if (!transactionCreateEntity)
    transactionCreateEntity = new TransactionCreateEntity(event.transaction.hash.toHex());

  // fill option entity value
  //decode transaction.input and save to option entity
  optionEntity.methodId = getMethodId(event.transaction.input);
  optionEntity.period = getPeriod(event.transaction.input);
  optionEntity.amount = getAmount(event.transaction.input);
  // ;
  optionEntity.strike = getStrike(event.transaction.input);
  optionEntity.optionType = getOptionType(event.transaction.input);
  
  optionEntity.createTimestamp = event.block.timestamp;
  optionEntity.owner = event.params.account.toHexString();
  optionEntity.settlementFee = event.params.settlementFee.toBigDecimal();
  optionEntity.save();

  //fill account entity value
  accountEntity.account = event.params.account.toHexString();
  
  if(!accountEntity.optionIdList)
    accountEntity.optionIdList = [];
  let tempAray: string[] = accountEntity.optionIdList;
  tempAray.push(optionEntity.id);
  accountEntity.optionIdList = tempAray;
  // accountEntity.optionIdList.push(optionEntity.id);
  accountEntity.save();

  //fill transactionCreate entity value
  transactionCreateEntity.accountEntity = accountEntity.id;
  transactionCreateEntity.optionEntity = optionEntity.id;
  transactionCreateEntity.sender = event.params.account.toHexString();
  transactionCreateEntity.timestamp = event.block.timestamp;
  transactionCreateEntity.save();
}

export function handleExercise(event: Exercise): void {}

export function handleExpire(event: Expire): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
