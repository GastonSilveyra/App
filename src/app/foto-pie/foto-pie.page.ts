import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-foto-pie',
  templateUrl: './foto-pie.page.html',
  styleUrls: ['./foto-pie.page.scss'],
})
export class FotoPiePage implements OnInit {

  image: string;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    // this.image = this.rutaActiva.snapshot.params.image;

    if ( this.rutaActiva.snapshot.params.image !== '0') {
      this.image =  this.rutaActiva.snapshot.params.image;
    } else {
      this.image = '/assets/shapes.svg';
    }
  }

}
