import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Fotos } from '../fotos';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { range } from 'rxjs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  imagenPie: string;
  imagenTobillo: string;
  imagePie: string;
  imageTobillo: string;
  nombre: string;
  apellido: string;
  email: string;
  fechaNac: string;
  talles = [];
  a = 22;
  talle: number;
  peso: number;
  altura: number;
  telefono: number;
  prescripcion: string;
  patologia: string;
  informeFinal: string;

  letterObj = {
    to: '',
    from: '',
    text: ''
  };
  pdfObj = null;
  pdfGenerator = null;

  constructor( private fotos: Fotos, private emailComposer: EmailComposer ) {
    for (let index = 0; index < 24; index++) {
      this.talles[index] = this.a;
      this.a++;
    }
  }

  ngOnInit() {
    this.imagenPie = this.fotos.getImagePie();
    this.imagenTobillo = this.fotos.getImageTobillo();
    this.imagePie = this.fotos.getimagenPie();
    this.imageTobillo = this.fotos.getImageTobillo();
  }
  talleSeleccionado(talle: Event) {
    this.talle = talle[`detail`].value;
    // console.log('this.talle :', this.talle);
  }

    enviarMail() {
    this.createPdf();

    const email = {
      to: this.email,
      attachments: [
        `base64:Resumen.pdf//${this.pdfObj}`,
      ],
      subject: 'Footsite',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  createPdf() {
    const docDefinition = {
      content: [
        { text: new Date().toLocaleTimeString(), alignment: 'left' },

        { text: this.nombre },
        { text: this.apellido },
        { text: this.fechaNac },

        { image: this.imagenPie, fit: [100, 100] },
        { image: this.imagenTobillo, fit: [100, 100] },
        // { image: this.imagePie, fit: [100, 100] },
        // { image: this.imageTobillo, fit: [100, 100] },

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
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
    this.pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBase64((data) => {
    this.pdfObj = data;
    console.log('El pdf se creo correctamente');
  });
  }

  descargarPDF() {
    this.pdfGenerator.download();
  }


}
