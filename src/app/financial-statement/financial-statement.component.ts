import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITransaction } from '../transaction.service';

@Component({
    selector: 'financial-statement',
    templateUrl: './financial-statement.component.html',
    styleUrls: ['./financial-statement.component.css']
})
export class FinancialStatementComponent implements OnChanges {

    @Input() transactionList: ITransaction[];
    @Input() total: number;
    balance: string;

    constructor() { }

    ngOnInit() {
        // this.transactionList = [{name:"caio", value:100, type:"BUY"},
        // {name:"caio caio caio caio caio", value:10000, type:"SELL"},
        // {name:"Tio Vando", value:10000, type:"SELL"}];
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["total"]) {
            if (!this.isLoss()) {
                this.balance = "Lucro";
            } else {
                this.balance = "Prejuízo";
            }
        }
    }

    isLoss() {
        if (this.total > 0) {
            return false;
        } else {
            return true;
        }
    }

}
