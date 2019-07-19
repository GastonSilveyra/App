import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TiposTobilloPage } from './tipos-tobillo.page';

const routes: Routes = [
  {
    path: '',
    component: TiposTobilloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TiposTobilloPage]
})
export class TiposTobilloPageModule {}
