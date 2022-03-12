import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Day } from '../app.component';
import { AppComponentService } from '../app.component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(private appService: AppComponentService, public router: Router) {}
  currentTheme: Day = Day.light;
  @HostBinding('class.light') light: boolean = true;

  ngOnInit(): void {
    this.subscription = this.appService.currentTheme.subscribe((theme: Day) => {
      this.currentTheme = theme;
      this.currentTheme == Day.light ? (this.light = true) : (this.light = false);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
