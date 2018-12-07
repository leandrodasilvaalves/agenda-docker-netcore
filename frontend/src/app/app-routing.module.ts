import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

const routes: Routes = [
  { path: '', component: ContatoListaComponent},
  { path:'novo', component: ContatoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
