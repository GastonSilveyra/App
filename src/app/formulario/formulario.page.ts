import { Component, OnInit } from '@angular/core';
import { FotoPiePage } from '../foto-pie/foto-pie.page';
import { FotoTobilloPage } from '../foto-tobillo/foto-tobillo.page';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  imagenPie: string;
  imagenTobillo: string;

  constructor( private fotoPie: FotoPiePage, private fotoTobillo: FotoTobilloPage ) {
    this.imagenPie = fotoPie.getImagePie();
    this.imagenTobillo = fotoTobillo.getImageTobillo();
   }

  ngOnInit() {
  }
}
