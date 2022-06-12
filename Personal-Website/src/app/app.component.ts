import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Icons } from './models/icons.model';
// import 'rxjs/add/operator/filter';
// import { filter, distinctUntilChanged } from 'rxjs/operators';
import { AppComponentService } from './app.component.service';
import { Subscription } from 'rxjs/internal/Subscription';

export enum Day {
  light,
  dark,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private subscription!: Subscription;

  title = `Ashok's Website`;
  public iconsList: Icons[] = [];
  lightIcon = 'brightness_3';
  time = 10;
  day: Day = Day.light;
  @HostBinding('class.light') light: boolean = true;
  modeTooltip = 'Turn On Dark Mode';
  constructor(public router: Router, private service: AppComponentService) {
    this.time = new Date().getHours();
    if (this.time > 12) {
      this.lightSettings();
    } else {
      this.darkSettings();
    }

    this.iconsList.push(new Icons('Home', 'home', 'home'));
    this.iconsList.push(new Icons('About', 'person_outline', 'about'));
    this.iconsList.push(new Icons('Work History', 'work_outline', 'work'));
    this.iconsList.push(new Icons('Contact', 'chat', 'contact'));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.iconsList.forEach((icons: Icons) => {
          icons.url === event.url.substring(1) ? (icons.isActive = true) : (icons.isActive = false);
        });
      }

      if (event instanceof NavigationError) {
        this.iconsList.forEach((icons: Icons) => (icons.isActive = false));
        this.iconsList[0].isActive = true;
        console.log(event.error);
      }
    });
  }

  switchMode(): void {
    if (this.day == Day.light) {
      this.darkSettings();
    } else {
      this.lightSettings();
    }
  }
  private lightSettings(): void {
    this.lightIcon = 'brightness_3';
    this.service.changeTheme(Day.light);
    this.light = true;
    this.modeTooltip = 'Turn On Dark Mode';
  }
  private darkSettings(): void {
    this.service.changeTheme(Day.dark);
    this.lightIcon = 'light';
    this.light = false;
    this.modeTooltip = 'Turn On Light Mode';
  }
  ngOnInit(): void {
    this.subscription = this.service.currentTheme.subscribe((theme: Day) => (this.day = theme));
    // this.currentTheme == Day.light ? (this.light = true) : (this.light = false);
  }
}
