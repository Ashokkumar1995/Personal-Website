import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Day } from '../app.component';
import { AppComponentService } from '../app.component.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private appService: AppComponentService, private fb: FormBuilder, private http: HttpClient) {}

  private subscription!: Subscription;
  currentTheme: Day = Day.light;
  @HostBinding('class.light') light: boolean = true;
  emailSuccess = false;
  emailMessage = 'Thank you for reaching me out. I will respond to your email as soon as possible.';
  emailErrorOccured = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: [''],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
    this.subscription = this.appService.currentTheme.subscribe((theme: Day) => {
      this.currentTheme = theme;
      this.currentTheme == Day.light ? (this.light = true) : (this.light = false);
    });
  }

  public onSubmit(): void {
    let url = 'https://formspree.io/f/xknyagdq';
    let data = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      subject: this.contactForm.get('subject')?.value,
      message: this.contactForm.get('message')?.value,
    };
    this.http.post(url, data).subscribe((d: any) => {
      if (d.ok) {
        this.emailSuccess = true;
      } else {
        this.emailErrorOccured = true;
        this.emailSuccess = false;
        this.emailMessage = 'Message not delivered, please send your mail to ashokkumarramasamy1995@gmail.com';
      }
    });
  }
}
