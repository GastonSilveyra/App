import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tipos-pie', loadChildren: './tipos-pie/tipos-pie.module#TiposPiePageModule'}, // canActivate:[AuthGuard] },
  { path: 'tipos-tobillo', loadChildren: './tipos-tobillo/tipos-tobillo.module#TiposTobilloPageModule' }, // canActivate:[AuthGuard] },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule'}, // canActivate:[AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'}, // canActivate:[AuthGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule'},
  { path: 'foto-pie', loadChildren: './foto-pie/foto-pie.module#FotoPiePageModule' }, // canActivate:[AuthGuard] },
  { path: 'foto-tobillo', loadChildren: './foto-tobillo/foto-tobillo.module#FotoTobilloPageModule' }, // canActivate:[AuthGuard] },
// canActivate:[AuthGuard] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
