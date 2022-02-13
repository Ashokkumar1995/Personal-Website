import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router  } from '@angular/router';
import { Icons } from './models/icons.model';
// import 'rxjs/add/operator/filter';
import {filter, distinctUntilChanged} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = `Ashok's Website`;
  public iconsList: Icons[]=[];

  constructor(private router: Router){
    this.iconsList.push(new Icons('Home','home'));
    this.iconsList.push(new Icons('About','person_outline'));
    this.iconsList.push(new Icons('Work History','work_outline'));
    this.iconsList.push(new Icons('Contact','chat'));

      this.router.events.subscribe((event) => {
        // if (event instanceof NavigationStart) {
        //     // Show progress spinner or progress bar
        //     console.log('Route change detected');
        // }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            // this.currentRoute = event.url;          
          this.iconsList.forEach((icons: Icons)=> {
            // icons.isActive=false;
            (icons.identifier === event.url.substring(1)) ? (icons.isActive=true): icons.isActive=false;
          });
          // this.iconsList.find(icon=>)
            // console.log(event);
            // console.log(this.iconsList);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });
  }

   ngOnInit(): void {
    
  }
}
 