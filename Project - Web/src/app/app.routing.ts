// All the routes go here

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactUsComponent }
];


@NgModule({

    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }

