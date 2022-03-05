import { Component } from '@angular/core';
import { NavInterface } from './core/components/models/nav.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routes';

  public nav: NavInterface[] = [
    {
      name: "home",
      link: "/"
    },
    {
      name: "gallery",
      link: "/gallery"
    },
    {
      name: "contact",
      link: "/contact"
    }
  ]
}
