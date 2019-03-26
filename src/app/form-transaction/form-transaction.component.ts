import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ITransaction } from '../transaction.service';

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
    transaction: ITransaction = { type: "", value: "R$ 0,00" };
    currency;
    @Output() transactionEmitter = new EventEmitter<ITransaction[]>();
    @Output() totalEmitter = new EventEmitter<number>();

    constructor() { 
        this.currency = "R$";
    }

    ngOnInit() { 
        this.transactionList = JSON.parse(localStorage.getItem("transactionList")) || [];
        this.total = JSON.parse(localStorage.getItem("total")) || 0;
    }

    addTransaction() {
        this.transaction.value = this.currencyParse(this.transaction.value);
        this.transactionList.push(this.transaction);
        this.transactionEmitter.emit(this.transactionList);
        
        if (this.transaction.type == "BUY") {
            this.total = this.total - this.transaction.value;
        } else {
            this.total = this.total + this.transaction.value;
        }

        this.totalEmitter.emit(this.total);
        this.transaction = { type: "", value: "R$ 0,00" };
        localStorage.setItem("total", JSON.stringify(this.total));
        localStorage.setItem("transactionList", JSON.stringify(this.transactionList));
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
        if (value.trim() == "") {
            return true;
        } else {
            return false;
        }
    }

    public formatCurrency(value) {
        value = value.replace( /[^0-9]/g, '' );
    
        if(value.length == 0) value = "0.00";
        else if(value.length == 1) value = "0.0" + value;
        else if(value.length == 2) value = "0." + value;
        else value = value.substring(0, value.length - 2) + '.' + value.substring(value.length - 2, value.length);
    
        value = new Number(value);
        value = value.toFixed(2);
        value = value.replace(/\./g, ',');
        let p = value.split(',');
        let p1 = p[0];
        let p2 = p.length > 1 ? ',' + p[1] : '';
	
        return this.formatCurrencyNoDecimals(p1) + p2;
    }
    
    public currencyParse(numberString) {
		return parseFloat(numberString.replace('.', '').replace(',', '.').replace(this.currency, ''));
    }
    
    private formatCurrencyNoDecimals(value) {
		var regex = /(\d+)(\d{3})/;
		while(regex.test(value)) {
			value = value.replace(regex, '$1' + '.' + '$2');
        }
		return this.currency + ' ' + value;
	}

}