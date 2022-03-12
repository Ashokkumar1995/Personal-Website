import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Day } from '../app.component';
import { AppComponentService } from '../app.component.service';
import { PersonalDetails } from '../models/personal-details.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private subscription!: Subscription;

  constructor(private appService: AppComponentService) {}
  currentTheme: Day = Day.light;
  info: PersonalDetails[] = [];
  private fileUrl = '../../assets/resume/Ashokkumar_Resume.pdf  ';
  @HostBinding('class.light') light: boolean = true;

  ngOnInit(): void {
    this.subscription = this.appService.currentTheme.subscribe((theme: Day) => {
      this.currentTheme = theme;
      this.currentTheme == Day.light ? (this.light = true) : (this.light = false);
    });

    this.setPersonalDetails();
  }

  private setPersonalDetails(): void {
    this.info.push(new PersonalDetails('First Name', 'Ashokkumar'));
    this.info.push(new PersonalDetails('Last Name', 'Ramasamy'));
    this.info.push(new PersonalDetails('Age', '26 Years'));
    this.info.push(new PersonalDetails('Nationality', 'Indian'));
    this.info.push(new PersonalDetails('Email', 'ashokkumarramasamy1995@gmail.com'));
    this.info.push(new PersonalDetails('Mobile NO', '+44 07918405474'));
    this.info.push(new PersonalDetails('Address', 'United Kingdom'));
    this.info.push(new PersonalDetails('Languages', 'English, Tamil'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public downloadResume(): void {
    this.appService.downloadResume(this.fileUrl).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'Ashokkumar.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
