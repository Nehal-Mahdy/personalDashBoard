import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('routeAnim', [

    ])
  ]
})
export class AppComponent {
  title = 'angular-personal-dashboard';

  prepareRoute(outlet : RouterOutlet){
    if(outlet.isActivated) {outlet.activatedRoute.snapshot.url}

  }
}
