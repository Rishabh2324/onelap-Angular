import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/product';
@Component({
  selector: 'app-gpstrackers',
  templateUrl: './gpstrackers.component.html',
  styleUrls: ['./gpstrackers.component.css']
})
export class GPStrackersComponent implements OnInit {
  products: Product[] = [
    {
      id: '0',
      name: 'Navtelecom SMART S-24 xx',
      image: '',
      onelapScore: '60%',
      startRating: ''
    },
    {
      id: '1',
      name: 'Navtelecom SMART S-24 xx',
      image: '',
      onelapScore: '60%',
      startRating: ''
    },
    {
      id: '2',
      name: 'Naasldkvansdv',
      image: '',
      onelapScore: '30%',
      startRating: ''
    },
    {
      id: '3',
      name: 'asdkvmlasv',
      image: '',
      onelapScore: '50%',
      startRating: ''
    },
    {
      id: '4',
      name: 'Navtelecom SMART S-24 xx',
      image: '',
      onelapScore: '10%',
      startRating: ''
    },
    {
      id: '5',
      name: 'Navtelecom SMART S-24 xx',
      image: '',
      onelapScore: '40%',
      startRating: ''
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
