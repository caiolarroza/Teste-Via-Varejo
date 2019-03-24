import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    screenWidth: number;
    sideMenuVisible: boolean = true;

    constructor() {
        this.getScreenSize();
   }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        console.log(this.screenWidth);
        // if (this.screenWidth <= 768) {
        //     this.sideMenuVisible = false;
        // } else {
        //     this.sideMenuVisible = true;
        // }
    }

    ngOnInit() {
    }

}
