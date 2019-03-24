import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ITransaction } from '../transaction.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'form-transaction',
    templateUrl: './form-transaction.component.html',
    styleUrls: ['./form-transaction.component.css']
})
export class FormTransactionComponent implements OnInit {
  
    total: number = 0;
    selectOptions = [{
        value:"BUY",
        label: "Compra"
    },
    {
        value:"SELL",
        label: "Venda"
    }];
    transactionList: ITransaction[] = [];
    transaction: ITransaction = { type: "" };
    @Output() transactionEmitter = new EventEmitter<ITransaction[]>();
    @Output() totalEmitter = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {  }

    addTransaction() {
        console.log("total 1", this.total);
        this.transactionList.push(this.transaction);
        this.transactionEmitter.emit(this.transactionList);
        
        if (this.transaction.type == "BUY") {
            console.log("COMPRA");
            this.total = this.total - this.transaction.value;
        } else {
            console.log("VENDA");
            this.total = this.total + this.transaction.value;
        }

        console.log("total ", this.total);
        this.totalEmitter.emit(this.total);
        this.transaction = { type: "" };
    }

    isDisabled() {
        if (this.isNull(this.transaction.type) || this.isEmpty(this.transaction.type)) {
            return true;
        } else if (this.isNull(this.transaction.name) || this.isEmpty(this.transaction.name)) {
            return true;
        } else if (this.isNull(this.transaction.value) || this.isEmpty(this.transaction.value)) {
            return true;
        } else {
            return false;
        }
    }

    isNull(value: any) {
        if (value == null) {
            return true;
        } else {
            return false;
        }
    }

    isEmpty(value: any) {
        if (value == "") {
            return true;
        } else {
            return false;
        }
    }

}