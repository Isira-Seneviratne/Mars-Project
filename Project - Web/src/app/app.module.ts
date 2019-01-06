// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app.routing';

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
    InternshipPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
