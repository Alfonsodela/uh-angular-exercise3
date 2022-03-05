import { Component, OnInit, Input } from '@angular/core';
import { NavInterface } from '../models/nav.models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() nav!: NavInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
