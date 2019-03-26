import { Component, HostListener } from '@angular/core';
import { ITransaction } from './transaction.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    transactionList: ITransaction[] = [];
    total: number;
    screenWidth: number;
    sideMenuVisible: boolean;
    openNav: boolean = false;

    title = 'teste-via-varejo';
    
    constructor() {
        this.getScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 1024) {
            this.sideMenuVisible = true;
        } else {
            this.sideMenuVisible = false;
        }
    }

    receiveTransaction(event) {
        this.transactionList = event;
    }

    receiveTotal(event) {
        this.total = event;
    }

    receiveVisible(event) {
        this.openNav = event;
    }

}
