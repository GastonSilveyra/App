import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Fotos } from '../fotos';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  imagenPie: string;
  imagenTobillo: string;

  letterObj = {
    to: '',
    from: '',
    text: ''
  };
  pdfObj = null;

  constructor( private fotos: Fotos, private emailComposer: EmailComposer ) { }

  ngOnInit() {
    this.imagenPie = this.fotos.getImagePie();
    this.imagenTobillo = this.fotos.getImageTobillo();
  }

    enviarMail() {

    this.crearPDF();

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

  crearPDF() {
    const docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },
        { text: new Date().toLocaleTimeString() },

        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },

        { text: 'To', style: 'subheader' },
        { image: this.imagenPie },
        { image: this.imagenTobillo },

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    };
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBase64((data) => {
    this.pdfObj = data;
    console.log('el pdf se creo');
  });
  }

}
