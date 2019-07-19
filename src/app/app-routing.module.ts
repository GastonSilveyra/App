import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sacar-foto', loadChildren: './sacar-foto/sacar-foto.module#SacarFotoPageModule' },
  { path: 'foto-pie/:image', loadChildren: './foto-pie/foto-pie.module#FotoPiePageModule' },
  { path: 'foto-tobillo', loadChildren: './foto-tobillo/foto-tobillo.module#FotoTobilloPageModule' },
  { path: 'tipos-pie', loadChildren: './tipos-pie/tipos-pie.module#TiposPiePageModule' },
  { path: 'tipos-tobillo', loadChildren: './tipos-tobillo/tipos-tobillo.module#TiposTobilloPageModule' },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
