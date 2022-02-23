// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AccountEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("optionIdList", Value.fromStringArray(new Array(0)));
    this.set("totalCall", Value.fromBigInt(BigInt.zero()));
    this.set("totalPut", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccountEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccountEntity", id.toString(), this);
    }
  }

  static load(id: string): AccountEntity | null {
    return changetype<AccountEntity | null>(store.get("AccountEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get optionIdList(): Array<string> {
    let value = this.get("optionIdList");
    return value!.toStringArray();
  }

  set optionIdList(value: Array<string>) {
    this.set("optionIdList", Value.fromStringArray(value));
  }

  get totalCall(): BigInt {
    let value = this.get("totalCall");
    return value!.toBigInt();
  }

  set totalCall(value: BigInt) {
    this.set("totalCall", Value.fromBigInt(value));
  }

  get totalPut(): BigInt {
    let value = this.get("totalPut");
    return value!.toBigInt();
  }

  set totalPut(value: BigInt) {
    this.set("totalPut", Value.fromBigInt(value));
  }
}

export class TransactionCreateEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromString(""));
    this.set("totalFee", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("accountEntity", Value.fromString(""));
    this.set("optionEntity", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save TransactionCreateEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TransactionCreateEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TransactionCreateEntity", id.toString(), this);
    }
  }

  static load(id: string): TransactionCreateEntity | null {
    return changetype<TransactionCreateEntity | null>(
      store.get("TransactionCreateEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get totalFee(): BigDecimal {
    let value = this.get("totalFee");
    return value!.toBigDecimal();
  }

  set totalFee(value: BigDecimal) {
    this.set("totalFee", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get accountEntity(): string {
    let value = this.get("accountEntity");
    return value!.toString();
  }

  set accountEntity(value: string) {
    this.set("accountEntity", Value.fromString(value));
  }

  get optionEntity(): string {
    let value = this.get("optionEntity");
    return value!.toString();
  }

  set optionEntity(value: string) {
    this.set("optionEntity", Value.fromString(value));
  }
}

export class OptionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
    this.set("amount", Value.fromString(""));
    this.set("optionType", Value.fromString(""));
    this.set("methodId", Value.fromString(""));
    this.set("createTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("period", Value.fromString(""));
    this.set("strike", Value.fromString(""));
    this.set("settlementFee", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("premium", Value.fromBigInt(BigInt.zero()));
    this.set("profit", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OptionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OptionEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OptionEntity", id.toString(), this);
    }
  }

  static load(id: string): OptionEntity | null {
    return changetype<OptionEntity | null>(store.get("OptionEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value!.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }

  get optionType(): string {
    let value = this.get("optionType");
    return value!.toString();
  }

  set optionType(value: string) {
    this.set("optionType", Value.fromString(value));
  }

  get methodId(): string {
    let value = this.get("methodId");
    return value!.toString();
  }

  set methodId(value: string) {
    this.set("methodId", Value.fromString(value));
  }

  get createTimestamp(): BigInt {
    let value = this.get("createTimestamp");
    return value!.toBigInt();
  }

  set createTimestamp(value: BigInt) {
    this.set("createTimestamp", Value.fromBigInt(value));
  }

  get period(): string {
    let value = this.get("period");
    return value!.toString();
  }

  set period(value: string) {
    this.set("period", Value.fromString(value));
  }

  get strike(): string {
    let value = this.get("strike");
    return value!.toString();
  }

  set strike(value: string) {
    this.set("strike", Value.fromString(value));
  }

  get settlementFee(): BigDecimal {
    let value = this.get("settlementFee");
    return value!.toBigDecimal();
  }

  set settlementFee(value: BigDecimal) {
    this.set("settlementFee", Value.fromBigDecimal(value));
  }

  get premium(): BigInt {
    let value = this.get("premium");
    return value!.toBigInt();
  }

  set premium(value: BigInt) {
    this.set("premium", Value.fromBigInt(value));
  }

  get profit(): BigInt {
    let value = this.get("profit");
    return value!.toBigInt();
  }

  set profit(value: BigInt) {
    this.set("profit", Value.fromBigInt(value));
  }
}