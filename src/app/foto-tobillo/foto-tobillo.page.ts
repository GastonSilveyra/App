import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-foto-tobillo',
  templateUrl: './foto-tobillo.page.html',
  styleUrls: ['./foto-tobillo.page.scss'],
})
export class FotoTobilloPage implements OnInit {

  imageTobillo: string = null;

  constructor(private camera: Camera) {
   }

  ngOnInit() {

  }

  getPicture(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.imageTobillo = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }
}
