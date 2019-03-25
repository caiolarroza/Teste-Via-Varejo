import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    screenWidth: number;
    isMobile: boolean = false;
    sideNavVisible: boolean = false;
    @Output() visibleEmitter = new EventEmitter<boolean>();

    constructor() {
        this.getScreenSize();
   }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        // console.log("aaa ", this.screenWidth);
        if (this.screenWidth < 1024) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
        // console.log("this.isMobile ", this.isMobile);
    }

    ngOnInit() {
    }

    openSideNav() {
        this.sideNavVisible = true;
        console.log("sideNavVisible ", this.sideNavVisible);
        this.visibleEmitter.emit(this.sideNavVisible);
    }

}
