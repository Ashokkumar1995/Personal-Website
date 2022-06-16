import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Day } from '../app.component';
import { AppComponentService } from '../app.component.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private appService: AppComponentService) {}

  private subscription!: Subscription;
  currentTheme: Day = Day.light;
  @HostBinding('class.light') light: boolean = true;

  ngOnInit(): void {
    this.subscription = this.appService.currentTheme.subscribe((theme: Day) => {
      this.currentTheme = theme;
      this.currentTheme == Day.light ? (this.light = true) : (this.light = false);
      this.light = false;
    });
  }
}
