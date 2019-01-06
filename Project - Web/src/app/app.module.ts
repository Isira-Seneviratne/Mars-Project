// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

// Components
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

// Services
import { AuthGuard } from './shared/guards/auth.guard';
import {AuthService } from './shared/services/auth.service';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:() => {
          return localStorage.getItem('tokenid');        }
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
