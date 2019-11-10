import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Fotos } from '../fotos';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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

  constructor( private fotos: Fotos, private emailComposer: EmailComposer, private socialSharing: SocialSharing ) {
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
        // { text: new Date().toLocaleTimeString(), alignment: 'left' },
        // 'Datos de la persona:',
        // {
        //   // to treat a paragraph as a bulleted list, set an array of items under the ul key
        //   ul: [
        //     { text: this.nombre },
        //     { text: this.apellido },
        //     { text: this.telefono },
        //     { text: this.fechaNac },
        //     { text: this.tipoCalzado },
        //     { text: this.talle },
        //     { text: this.peso },
        //     { text: this.altura },
        //     { text: this.prescripcion },
        //     { text: this.patologia },
        //     { text: this.informeFinal },
        //   ]
        // },
        {
          image: this.imagenPieSelec,
          fit: [300, 300],
        },
        // {
        //   image: this.imagenPieCamara,
        //   fit: [300, 300],
        // },
        // {
        //   image: this.imagenTobilloSelec,
        //   fit: [300, 300],
        // },
        // {
        //   image: this.imagenTobilloCamara,
        //   fit: [300, 300],
        // },
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

  downloadPDF() {
    const docDefinition = {
      content: [
        {
          image: this.imagenPieSelec,
          fit: [300, 300],
        },
        // {
        //   image: this.imagenPieCamara,
        //   fit: [300, 300],
        // },
        // {
        //   image: this.imagenTobilloSelec,
        //   fit: [300, 300],
        // },
        // {
        //   image: this.imagenTobilloCamara,
        //   fit: [300, 300],
        // },
      ],
    };
    pdfMake.createPdf(docDefinition).download('Resumen.pdf');
  }

  enviarPorMail() {
    this.createPdf();
    this.socialSharing.shareViaEmail(null, 'Footsite', [this.email]).then(() => {
        console.log('El mail se envio correctamente');
      }).catch(() => {
        console.log('Error al enviar el mail');
      });
  }

  enviarPorWhatsapp() {
    this.socialSharing.shareViaWhatsApp(null, this.imagenPieSelec).then(() => {

    }).catch(() => {
      console.log('Fallo al enviar por whatsapp');
    });
  }

}
