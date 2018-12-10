import { Component, OnInit } from '@angular/core';
import { IContato } from '../agenda.models';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss']
})
export class ContatoFormComponent implements OnInit {
  
  contato: IContato;

  constructor() { 
    this.contato = {} as IContato;
  }

  ngOnInit() {
  }

  salvar(): void{
    console.log(this.contato);
  }

  atualizarTelefones(telefones){
    this.contato.telefones = telefones;
  }
}
