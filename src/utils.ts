import { BigDecimal, BigInt, ByteArray, Bytes, ethereum, log } from "@graphprotocol/graph-ts"

export function getMethodId(input:Bytes) : string {
    let str = "0x" + input[0].toString(16) + input[1].toString(16) + input[2].toString(16) + input[3].toString(16);
    return str;
}

export function getPeriod(input:Bytes): string {
    let str = "0x";
    for(let i=4 ; i<36; i++){
        if(input[i].toString(16).length < 2)
        str += "0" + input[i].toString(16);
        else
        str += input[i].toString(16);
    }
    return str;
}

export function getAmount(input:Bytes): string {
    let b:Bytes;
    b = new Bytes(32);
    let j =0;
    for(let i=36 ; i<68; i++){
        b[j] = input[i];
        j++;
    }
    return b.toHexString();
}

export function getStrike(input:Bytes): string {
    let str = "0x";
    for(let i=68 ; i<100; i++){
        if(input[i].toString(16).length < 2)
        str += "0" + input[i].toString(16);
        else
        str += input[i].toString(16);
    }
    return str;
}

export function getOptionType(input:Bytes): string {
    let str = "0x";
    for(let i=100 ; i<132; i++){
        if(input[i].toString(16).length < 2)
        str += "0" + input[i].toString(16);
        else
        str += input[i].toString(16);
    }
    return str;
}