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
    transaction: ITransaction = {};
    @Output() transactionEmitter = new EventEmitter<ITransaction[]>();
    @Output() totalEmitter = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {  }

    addTransaction() {
        console.log("total 1", this.total);
        this.transactionList.push(this.transaction);
        this.transactionEmitter.emit(this.transactionList);
        this.transactionList.forEach(item => {
            if (item.type == "BUY") {
                this.total = this.total - item.value;
            } else {
                this.total = this.total + item.value;
            }
        });
        console.log("total ", this.total);
        this.totalEmitter.emit(this.total);
        this.transaction = {};
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