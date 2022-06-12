import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Day } from '../app.component';
import { AppComponentService } from '../app.component.service';
import { WorkDetails } from '../models/workdetails.model';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
})
export class WorkHistoryComponent implements OnInit {
  constructor(private appService: AppComponentService) {}
  currentTheme: Day = Day.light;
  private subscription!: Subscription;
  public workDetails: WorkDetails[] = [];

  @HostBinding('class.light') light: boolean = true;

  ngOnInit(): void {
    this.subscription = this.appService.currentTheme.subscribe((theme: Day) => {
      this.currentTheme = theme;
      this.currentTheme == Day.light ? (this.light = true) : (this.light = false);
    });
    this.setWorkDetails();
  }

  private setWorkDetails(): void {
    let bnyDetails: string[] = [];
    bnyDetails.push(
      'Developed cloud-based technologies with Angular, Javascript, and Java to assist counterpart requirements which increased user experience and performance'
    );
    bnyDetails.push(
      'Worked with product managers to re-architect two multi- page web app into a single page web-app in Angular'
    );
    bnyDetails.push(
      'Tested software for bugs and operating speed, fixing bugs and documenting processes to increase efficiency by 18%'
    );
    bnyDetails.push(
      'Built RESTful APIs that served data to the JavaScript front- end based on dynamically chosen user inputs that handled many concurrent users'
    );

    let bnyAwards: string[] = ['Applause Award (2019)', 'WoW Award (2019)'];

    let bny = new WorkDetails('Bank Of NewYork Mellon', 'Application Developer', '2017-2019', bnyDetails, bnyAwards);

    let nielsenDetails: string[] = [];

    nielsenDetails.push(
      'Built and maintained application that scaled to 10K daily users, communicating with cross-functional teams regarding product and design'
    );
    nielsenDetails.push('Transformed UIs using Angular, decreased loading time by 30% and increase performance');
    nielsenDetails.push(
      'Focused on front-end development, providing mentorship and coaching to juniors and new members in the team'
    );
    nielsenDetails.push('Introduced new features in the application which enhanced user experience');

    let nielsenAwards: string[] = ['Gold Award (2020)'];

    let nielsen = new WorkDetails('Nielsen', 'Software Engineer', '2019-2021', nielsenDetails, nielsenAwards);
    this.workDetails.push(bny, nielsen);
  }
}
