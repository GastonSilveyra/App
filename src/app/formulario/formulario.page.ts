import { Component, OnInit } from '@angular/core';
import { FotoPiePage } from '../foto-pie/foto-pie.page';
import { FotoTobilloPage } from '../foto-tobillo/foto-tobillo.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  imagenPie: string;
  imagenTobillo: string;

  constructor( private fotoPie: FotoPiePage, private fotoTobillo: FotoTobilloPage, private emailComposer: EmailComposer ) {
    this.imagenPie = fotoPie.getImagePie();
    this.imagenTobillo = fotoTobillo.getImageTobillo();
   }

  ngOnInit() {
  }

    enviarMail() {

    let email = {
      to: 'gaston.leandro.silveyra@gmail.com',
      cc: 'gaston.leandro.silveyra@gmail.com',
      attachments: [
      'file: /img/neutro.jpg',
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
