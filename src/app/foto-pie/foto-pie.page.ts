import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Fotos } from '../fotos';

@Component({
  selector: 'app-foto-pie',
  templateUrl: './foto-pie.page.html',
  styleUrls: ['./foto-pie.page.scss'],
})
export class FotoPiePage implements OnInit {

  imagePie: string = null;

  constructor(private camera: Camera, private fotos: Fotos) {
   }

  ngOnInit() {

  }

  getPicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    };
    this.camera.getPicture( options )
    .then(imageData => {
      this.imagePie = `data:image/jpeg;base64,${imageData}`;
      this.fotos.setImagePie(`data:image/jpeg;base64,${imageData}`);
    })
    .catch(error => {
      console.error( error );
    });
  }

}
