import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiComponent } from './experi/experi.component';


const routes: Routes = [ 
  {path : '', component: HomeComponent},
  {path : 'experi', component: ExperiComponent}


];



@NgModule({
  declarations: [],
  imports: [
    CommonModule , RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
