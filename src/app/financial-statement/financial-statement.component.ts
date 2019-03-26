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
        this.transactionList = JSON.parse(localStorage.getItem("transactionList"));
        this.total = JSON.parse(localStorage.getItem("total"));
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
