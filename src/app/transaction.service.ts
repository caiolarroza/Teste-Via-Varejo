import { Injectable } from '@angular/core';

export interface ITransaction {
    type?: string,
    name?: string,
    value?: number
}

@Injectable()
export abstract class TransactionService {

    abstract getTransactions(): ITransaction[];

}