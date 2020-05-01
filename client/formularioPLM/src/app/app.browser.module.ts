import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from '../app/services/user.service';
import { AppModule } from './app.module';

@NgModule({
  imports: [

    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
