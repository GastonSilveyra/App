import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
  loginForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor( private router: Router, private fireauth: AngularFireAuth, private toastController: ToastController, private alertContrller: AlertController, private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.required],
    });
  }

async onRegister() {
  const user = await this.fireauth.auth.createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
    .then(res => {
      if (res.user) {
        console.log(res.user);
        this.presentToast('Tu cuenta ha sido creada, por favor inicia sesion!');
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
      color: 'dark',
      message,
      duration: 2000
    });
    toast.present();
  }


}
