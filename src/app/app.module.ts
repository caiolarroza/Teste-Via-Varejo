import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormTransactionComponent } from './form-transaction/form-transaction.component';
import { FinancialStatementComponent } from './financial-statement/financial-statement.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormTransactionComponent,
    FinancialStatementComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
