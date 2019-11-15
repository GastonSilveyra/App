import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email = '';
  image = 'assets/logo.jpg';
  error;
  loginForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private authSvc: AuthService, private fireauth: AngularFireAuth, private toastController: ToastController, private alertContrller: AlertController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    });
  }
  recover() {
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('El mail de recuperacion de contraseña ha sido enviado', 'bottom', 2000);
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.log(`failed ${err}`);
        this.presentToast(err, 'bottom', 2000);
      });
  }
  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      color: 'dark',
      message,
      position,
      duration
    });
    toast.present();
  }

}
