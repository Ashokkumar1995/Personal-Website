import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AppComponentService } from './app.component.service';
// import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatTooltipModule, BrowserAnimationsModule],
  providers: [AppComponentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
