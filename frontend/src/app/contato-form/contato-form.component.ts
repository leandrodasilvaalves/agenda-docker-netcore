import { Component, OnInit } from '@angular/core';
import { IContato } from '../agenda.models';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss']
})
export class ContatoFormComponent implements OnInit {
  
  contato: IContato;

  constructor(private servico: AgendaService) { 
    this.contato = {} as IContato;
  }

  ngOnInit() {
  }

  salvar(): void{
    this.servico.incluirContato(this.contato).subscribe(console.log);
  }

  atualizarTelefones(telefones){
    this.contato.telefones = telefones;
  }
}
