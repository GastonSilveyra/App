import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
  // tslint:disable-next-line:max-line-length
  constructor( private router: Router, private fireauth: AngularFireAuth, private toastController: ToastController, private alertContrller: AlertController) {

   }

  ngOnInit() {
  }

async onRegister() {
  const user = await this.fireauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(res => {
      if (res.user) {
        console.log(res.user);
        this.router.navigateByUrl('/home');
      }
    })
    .catch(err => {
      console.log(`login failed ${err}`);
      this.presentToast(err);
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


}
