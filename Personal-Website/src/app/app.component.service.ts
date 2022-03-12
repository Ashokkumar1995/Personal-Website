import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Day } from './app.component';

@Injectable()
export class AppComponentService {
  constructor(private http: HttpClient) {}

  private theme = new BehaviorSubject(Day.dark);
  currentTheme = this.theme.asObservable();

  public changeTheme(theme: Day) {
    this.theme.next(theme);
  }

  public downloadResume(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob',
    });
  }
}
