import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents  } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {DataService} from './currency/data.service';
import { HttpClientModule } from '@angular/common/http';

//import { DepartmentListComponent } from './department-list/department-list.component';
import { AccessRequestComponent } from './access-request/access-request.component';
import { CurrencyComponent } from './currency/currency.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }