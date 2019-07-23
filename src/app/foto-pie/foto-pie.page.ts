import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-foto-pie',
  templateUrl: './foto-pie.page.html',
  styleUrls: ['./foto-pie.page.scss'],
})
export class FotoPiePage implements OnInit {

  imagePie = 'hola';

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
      this.imagePie = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }

  public getImagePie() {
    return this.imagePie;
  }
}
