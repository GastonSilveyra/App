import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Fotos } from '../fotos';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { range } from 'rxjs';
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {


  imagenPieCamara: string;
  imagenTobilloCamara: string;


  imagenPieSelec: string;
  imagenTobilloSelec: string;


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

  constructor( private fotos: Fotos, private emailComposer: EmailComposer, private router: Router ) {
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
    this.imagenPieCamara = this.fotos.getImagenPieCamara();
    this.imagenTobilloCamara = this.fotos.getImagenTobilloCamara();

    this.imagenPieSelec = this.fotos.getImagenPieSelec();
    this.imagenTobilloSelec = this.fotos.getImagenTobilloSelec();
  }
  talleSeleccionado(talle: Event) {
    this.talle = talle[`detail`].value;
    // console.log('this.talle :', this.talle);
  }

    enviarMail() {

    const email = {
      to: this.email,
      attachments: [
        // `base64:Resumen.pdf//${this.pdfObj}`,
        `base64:Resumen.pdf//` + this.pdfObj,
      ],
      subject: 'Footsite',
      isHtml: true
    };
    this.emailComposer.open(email);
    this.router.navigateByUrl('foto-pie');
  }

  createPdf() {
    const fechaNac = new Date(this.fechaNac);
    const docDefinition = {
      content: [
        { text: new Date().toLocaleTimeString(), alignment: 'left' },
        'Datos de la persona:',
        {
          // to treat a paragraph as a bulleted list, set an array of items under the ul key
          ul: [
            { text: 'Nombre:' + this.nombre },
            { text: 'Apellido:' + this.apellido },
            { text: 'Telefono:' + this.telefono },
            { text: 'Fecha de nacimiento:' + fechaNac.getDate() + '/' + fechaNac.getMonth() + '/' + fechaNac.getFullYear() },
            { text: 'Tipo de calzado:' + this.tipoCalzado },
            { text: 'Talle:' + this.talle },
            { text: 'Peso:' + this.peso },
            { text: 'Altura:' + this.altura },
            { text: 'Prescripcion:' + this.prescripcion },
            { text: 'Patologia:' + this.patologia },
            { text: 'Informe Final:' + this.informeFinal },
          ]
        },
        {
          text: 'Imagen de pie seleccionada',
          fontSize: 14,
        },
        {
          image: this.imagenPieSelec,
          fit: [300, 300],
        },
        {
          text: 'Imagen de pie foto',
          fontSize: 14,
        },
        {
          image: this.imagenPieCamara,
          fit: [300, 300],
        },
        {
          text: 'Imagen de tobillo seleccionada',
          fontSize: 14,
        },
        {
          image: this.imagenTobilloSelec,
          fit: [300, 300],
        },
        {
          text: 'Imagen de tobillo foto',
          fontSize: 14,
        },
        {
          image: this.imagenTobilloCamara,
          fit: [300, 300],
        },
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
    setTimeout(() => {
      this.enviarMail();
    },
    2000);
  }

}
