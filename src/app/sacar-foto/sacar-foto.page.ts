import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-sacar-foto',
  templateUrl: './sacar-foto.page.html',
  styleUrls: ['./sacar-foto.page.scss'],
})
export class SacarFotoPage implements OnInit {

  image: string = null;

  constructor(private camera: Camera) { }

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
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
