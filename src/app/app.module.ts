import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HindiComponent } from './hindi/hindi.component';
import { EnglishComponent } from './english/english.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DataComponent } from './data/data.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MobilesComponent } from './mobiles/mobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserListComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    TeluguComponent,
    HindiComponent,
    EnglishComponent,
    MobilesComponent,
    PagenotfoundComponent,
    DataComponent,
    UserdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
