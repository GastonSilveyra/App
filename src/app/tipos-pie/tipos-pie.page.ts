import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Fotos } from '../fotos';

@Component({
  selector: 'app-tipos-pie',
  templateUrl: './tipos-pie.page.html',
  styleUrls: ['./tipos-pie.page.scss'],
})
export class TiposPiePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  currentIndex = 0;

  imagenes = [
    {
      img: 'assets/img/plano-primer-grado.jpg',
      titulo: 'Pie Plano<br>Primer Grado<br>o Pie Debil.'
    },
    {
      img: 'assets/img/plano-segundo-grado.jpg',
      titulo: 'Pie Plano<br>Segundo Grado<br>o Desplegado.'
    },
    {
      img: 'assets/img/plano-tercer-grado.jpg',
      titulo: 'Pie Plano<br>Tercer Grado<br>o Disminuido.'
    },
    {
      img: 'assets/img/plano-cuarto-grado.jpg',
      titulo: 'Pie Plano<br>Cuarto Grado<br>o Aplanado.'
    },    {
      img: 'assets/img/pie-normal.jpg',
      titulo: 'Pie Normal.'
    },    {
      img: 'assets/img/cavo-primer-grado.jpg',
      titulo: 'Pie Cavo<br>Primer Grado<br>o Arqueado.'
    },    {
      img: 'assets/img/cavo-segundo-grado.jpg',
      titulo: 'Pie Cavo<br>Segundo Grado.'
    }
  ];

  constructor(private router: Router, private foto: Fotos) { }

  ngOnInit() {
  }
  navegar() {
    this.foto.setimagenPie(this.imagenes[this.currentIndex].img);
    this.router.navigateByUrl('foto-tobillo');
  }
  slideChanged() {
    this.slides.getActiveIndex().then(data => {
      console.log(data);
      this.currentIndex = data;
    });
  }

}
