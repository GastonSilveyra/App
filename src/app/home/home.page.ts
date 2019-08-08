import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {User} from '../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: User = new User();
  error = '';
  image = 'assets/logo.jpg';
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private authSvc: AuthService, private fireauth: AngularFireAuth, private toastController: ToastController, private alertContrller: AlertController) {}

  ngOnInit() {
  }

 async onLogin() {
   this.fireauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
   .then(res => {
    if (res.user) {
      console.log(res);
      this.presentToast('Successfully logged in!');
      this.router.navigate(['/foto-pie']);
    }
  })
  .catch(err => {
    console.log(`login failed ${err}`);
    this.presentToast(err);
  });
  }

  async presentToast(me: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: me,
    });
    toast.present();
  }
}
