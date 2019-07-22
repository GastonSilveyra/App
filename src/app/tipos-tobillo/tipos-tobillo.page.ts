import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-tobillo',
  templateUrl: './tipos-tobillo.page.html',
  styleUrls: ['./tipos-tobillo.page.scss'],
})
export class TiposTobilloPage implements OnInit {

  slides = [
    {
      img: 'assets/img/neutro.jpg',
      titulo: 'Neutro.'
    },
    {
      img: 'assets/img/pronacion.jpg',
      titulo: 'Pronación.'
    },
    {
      img: 'assets/img/supinacion.jpg',
      titulo: 'Supinación.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
