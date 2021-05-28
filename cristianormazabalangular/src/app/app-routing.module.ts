import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AcercadeComponent } from './acercade/acercade.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, },
  { path: 'alumnos', component: AlumnosComponent, },
  { path: 'acercade', component: AcercadeComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);