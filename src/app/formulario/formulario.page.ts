import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Fotos } from '../fotos';
import { Base64 } from '@ionic-native/base64/ngx';

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

  // fotos de camara
  imagenPie: string;
  imagenTobillo: string;

  // fotos seleccionadas
  imagePie: string;
  imageTobillo: string;
  imagePieB64: string;
  imageTobilloB64: string;


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
  tipoCalzado: string;

  letterObj = {
    to: '',
    from: '',
    text: ''
  };
  pdfObj = null;
  pdfGenerator = null;

  constructor( private fotos: Fotos, private emailComposer: EmailComposer, private base64: Base64 ) {
    for (let index = 0; index < 24; index++) {
      this.talles[index] = this.a;
      this.a++;
    }
  }

  ngOnInit() {
    // this.imagenPie = this.fotos.getImagePie();
    // this.imagenTobillo = this.fotos.getImageTobillo();

    // this.imagePie = this.fotos.getimagenPie();
    // this.imageTobillo = this.fotos.getImageTobillo();
    // this.crearNumeroCalzado();
  }

  ionViewWillEnter() {
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
    // this.createPdf();

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
        { text: this.telefono },
        { text: this.fechaNac },
        { text: this.tipoCalzado },
        { text: this.talle },
        { text: this.peso },
        { text: this.altura },
        { text: this.prescripcion },
        { text: this.patologia },
        { text: this.informeFinal },

        { image: this.imagenPie, fit: [100, 100] },
        { image: this.imagenTobillo, fit: [100, 100] },
        { image: this.imagePieB64, fit: [100, 100] },
        { image: this.imageTobilloB64, fit: [100, 100] },

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
    this.enviarMail();
  }

  descargarPDF() {
    this.pdfGenerator.download();
  }


  convertirBase64() {
    this.base64.encodeFile(this.imagePie).then((base64File: string) => {
      console.log(base64File);
      this.imagePieB64 = base64File;
    }, (err) => {
      console.log(err);
    });
    this.base64.encodeFile(this.imageTobillo).then((base64File: string) => {
      console.log(base64File);
      this.imageTobilloB64 = base64File;
    }, (err) => {
      console.log(err);
    });
    this.createPdf();
  }

}
