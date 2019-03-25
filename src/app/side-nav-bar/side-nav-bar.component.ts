import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'side-nav-bar',
    templateUrl: './side-nav-bar.component.html',
    styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

    _openNav : boolean = false;
    @Input()
    get openNav(): boolean {
        return this._openNav;
    };
    set openNav(value: boolean) {
        this._openNav = value;
        this.openNavChange.emit(this.openNav);
    }
    @Output() openNavChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    closeSideNav() {
        this.openNav = false;
        this.openNavChange.emit(this.openNav);
        console.log("this.openNav ", this.openNav);
    }

    isOpenNav() {
        console.log("aaaaads");
        if (this.openNav) {
            return true;
        } else {
            return false;
        }
    }

}
