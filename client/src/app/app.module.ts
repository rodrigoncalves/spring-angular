import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HttpModule } from '@angular/http';
import { ConfigService } from './services/config.service';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ConfigService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
