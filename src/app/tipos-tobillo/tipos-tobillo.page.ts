import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Fotos } from '../fotos';

@Component({
  selector: 'app-tipos-tobillo',
  templateUrl: './tipos-tobillo.page.html',
  styleUrls: ['./tipos-tobillo.page.scss'],
})
export class TiposTobilloPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  currentIndex = 0;

  images = [
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

  constructor(private router: Router, private foto: Fotos) { }

  ngOnInit() {
  }
  navigate() {
    this.foto.setimagenTobillo(this.images[this.currentIndex].img);
    this.router.navigateByUrl('formulario');

  }
  slideChanged() {
    this.slides.getActiveIndex().then(data => {
      console.log(data);
      this.currentIndex = data;
    });
  }

}
