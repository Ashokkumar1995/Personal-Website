import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Day } from './app.component';

@Injectable()
export class AppComponentService {
  private theme = new BehaviorSubject(Day.dark);
  currentTheme = this.theme.asObservable();

  public changeTheme(theme: Day) {
    this.theme.next(theme);
  }
}
