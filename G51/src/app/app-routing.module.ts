import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExtraComponent } from './componentes/extra/extra.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'extra',
    component: ExtraComponent
  },
  {
    path:'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
