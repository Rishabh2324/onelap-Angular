import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    // tslint:disable-next-line:max-line-length
    navText: [
      '<i class="fa fa-chevron-left fables-main-text-color fables-main-border-color fables-partner-nav-icon" aria-hidden="true">',
      '<i class="fa fa-chevron-right fables-main-text-color fables-main-border-color fables-partner-nav-icon" aria-hidden="true">'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  slider = [
    [
      '/src/assets/images/step1.png',
      'You will Need a Hardware'
    ]
  ]
  constructor() { }

  ngOnInit() {

  }


}
