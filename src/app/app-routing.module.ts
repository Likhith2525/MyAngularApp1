import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { EnglishComponent } from './english/english.component';
import { HindiComponent } from './hindi/hindi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TeluguComponent } from './telugu/telugu.component';
import { DataComponent } from './data/data.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MobilesComponent } from './mobiles/mobiles.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'telugu',component:TeluguComponent},
    {path:'hindi',component:HindiComponent},
    {path:'english',component:EnglishComponent},
    {path:'mobiles',component:MobilesComponent},
    {path:'',redirectTo:'/products/telugu',pathMatch:'full'}
  ]},
  {path:'users',component:DataComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
