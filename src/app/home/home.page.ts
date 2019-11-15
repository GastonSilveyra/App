import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {User} from '../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: User = new User();
  error = '';
  loginForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private authSvc: AuthService, private fireauth: AngularFireAuth, private toastController: ToastController, private alertContrller: AlertController, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.required],
    });
  }

 async onLogin() {
   console.log(this.loginForm);
   this.fireauth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
   .then(res => {
    if (res.user) {
      console.log(res);
      this.presentToast('Has iniciado sesion satisfactoriamente!');
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
