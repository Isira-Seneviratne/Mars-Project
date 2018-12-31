// All the routes go here

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { StudentInternshipFormComponent } from './modules/student-internship-form/student-internship-form.component';
import { CompaniesComponent } from './modules/companies/companies.component';
import { CompanyComponent } from './modules/company/company.component';
import { InternshipPageComponent } from './modules/internship-page/internship-page.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactUsComponent },
    {path : 'studentInternshipForm',component:StudentInternshipFormComponent},
    {path:'companies',component:CompaniesComponent},
    {path:'company',component:CompanyComponent},
    {path:'internshipPage',component:InternshipPageComponent}
   
    
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

