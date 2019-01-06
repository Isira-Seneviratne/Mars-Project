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
import { AdminQuizComponent } from './modules/admin-quiz/admin-quiz.component';
import { AdminStudentComponent } from './modules/admin-student/admin-student.component';
import { AdmincompanyComponent } from './modules/admincompany/admincompany.component';
import { StudentProfileComponent } from './modules/student-profile/student-profile.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactUsComponent },
    {path : 'studentInternshipForm',component:StudentInternshipFormComponent},
    {path:'companies',component:CompaniesComponent},
    {path:'company',component:CompanyComponent},
    {path:'internshipPage',component:InternshipPageComponent},
    {path:'AdminQuiz',component:AdminQuizComponent},
    {path:'AdminStudent',component:AdminStudentComponent},
    {path:'Admincompany',component:AdmincompanyComponent},
    {path:'studentProfile',component:StudentProfileComponent}
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

