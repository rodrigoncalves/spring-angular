import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HttpModule } from '@angular/http';
import { ConfigService } from './services/config.service';
import { CompanyService } from './services/company.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormCompanyComponent } from './company/form/form.component';
import { routing } from './app.routes';
import { ShowCompanyComponent } from './company/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CompanyComponent,
    FormCompanyComponent,
    ShowCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
