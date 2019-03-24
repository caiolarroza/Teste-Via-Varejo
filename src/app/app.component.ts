import { Component } from '@angular/core';
import { ITransaction } from './transaction.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    transactionList: ITransaction[] = [];
    total: number;

    title = 'teste-via-varejo';

    receiveTransaction(event) {
        console.log("kerk", event);
        this.transactionList = event;
    }

    receiveTotal(event) {
        this.total = event;
    }

}
