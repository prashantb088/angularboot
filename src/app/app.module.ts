import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootheaderComponent } from './bootheader/bootheader.component';
import { BootviewComponent } from './bootview/bootview.component';
import { UserserviceService } from './service/userservice.service';
import { ViewlaptopComponent } from './viewlaptop/viewlaptop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddlaptopComponent } from './addlaptop/addlaptop.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BootheaderComponent,
    BootviewComponent,
    ViewlaptopComponent,
    NavbarComponent,
    AddlaptopComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
