import { Component, OnInit, Input } from '@angular/core';
import { ITransaction } from '../transaction.service';

@Component({
    selector: 'financial-statement',
    templateUrl: './financial-statement.component.html',
    styleUrls: ['./financial-statement.component.css']
})
export class FinancialStatementComponent implements OnInit {

    @Input() transactionList: ITransaction[];
    @Input() total: number;

    constructor() { }

    ngOnInit() {
        this.transactionList = [{name:"caio", value:100, type:"BUY"},
        {name:"caio caio caio caio caio", value:10000, type:"SELL"},
        {name:"caio caio caio caio caio caio caio caio caio", value:10000, type:"BUY"}];
    }

}
