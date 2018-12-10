import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { AgendaService } from './agenda.service';
import { HttpClientModule } from '@angular/common/http';
import { TelefoneListaComponent } from './telefone-lista/telefone-lista.component';
import { CommonModule } from '@angular/common';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { TelefoneFormComponent } from './telefone-form/telefone-form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoListaComponent,
    TelefoneListaComponent,
    ContatoFormComponent,
    TelefoneFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
