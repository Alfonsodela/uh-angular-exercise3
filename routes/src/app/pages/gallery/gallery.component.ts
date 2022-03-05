import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public img: string = 'https://cdn.pixabay.com/photo/2021/03/12/08/51/shorturl-6089108_960_720.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
