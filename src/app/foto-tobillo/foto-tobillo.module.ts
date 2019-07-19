import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FotoTobilloPage } from './foto-tobillo.page';

const routes: Routes = [
  {
    path: '',
    component: FotoTobilloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FotoTobilloPage]
})
export class FotoTobilloPageModule {}
