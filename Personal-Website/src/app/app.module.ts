import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AppComponentService } from './app.component.service';
// import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, WorkHistoryComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
