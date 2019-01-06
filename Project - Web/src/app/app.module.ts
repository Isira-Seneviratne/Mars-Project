import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent} from './modules/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { StudentInternshipFormComponent } from './modules/student-internship-form/student-internship-form.component';
import { CompaniesComponent } from './modules/companies/companies.component';
import { CompanyComponent } from './modules/company/company.component';
import { InternshipPageComponent } from './modules/internship-page/internship-page.component';
import { AdminQuizComponent } from './modules/admin-quiz/admin-quiz.component';
import { AdminStudentComponent } from './modules/admin-student/admin-student.component';
import { AdmincompanyComponent } from './modules/admincompany/admincompany.component';
import { StudentProfileComponent } from './modules/student-profile/student-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    StudentInternshipFormComponent,
    CompaniesComponent,
    CompanyComponent,
    InternshipPageComponent,
    AdminQuizComponent,
    AdminStudentComponent,
    AdmincompanyComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
