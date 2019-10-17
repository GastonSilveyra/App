import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Fotos } from '../fotos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto-tobillo',
  templateUrl: './foto-tobillo.page.html',
  styleUrls: ['./foto-tobillo.page.scss'],
})
export class FotoTobilloPage implements OnInit {

  imageTobillo: string = null;

  constructor(private camera: Camera, private fotos: Fotos, private router: Router) {
   }

  ngOnInit() {

  }
  navegar() {
    this.router.navigateByUrl('tipos-tobillo');

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
      this.imageTobillo = `data:image/jpeg;base64,${imageData}`;
      this.fotos.setImageTobillo(`data:image/jpeg;base64,${imageData}`);
    })
    .catch(error => {
      console.error( error );
    });
  }

}
