import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Fotos } from '../fotos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  imagenPie: string;
  imagenTobillo: string;

  constructor( private fotos: Fotos, private emailComposer: EmailComposer ) { }

  ngOnInit() {
    this.imagenPie = this.fotos.getImagePie();
    this.imagenTobillo = this.fotos.getImageTobillo();
  }

    enviarMail() {

    const email = {
      to: 'gaston.leandro.silveyra@gmail.com',
      cc: 'gaston.leandro.silveyra@gmail.com',
      attachments: [],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
