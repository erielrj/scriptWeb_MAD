import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './view/page-home/page-home.component';
import { ProdutoFormComponent } from './view/produto-form/produto-form.component';
import { UsuarioFormComponent } from './view/usuario-form/usuario-form.component';
import { UsuarioPerfilComponent } from './view/usuario-perfil/usuario-perfil.component';

const routes: Routes = [
  {
    path:"", component:PageHomeComponent
  },
  {
    path:"formUser", component:UsuarioFormComponent
  },
  {
    path:"perfilUser", component:UsuarioPerfilComponent
  },
  {
    path:"produtoForm", component:ProdutoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
