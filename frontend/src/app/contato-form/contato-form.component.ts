import { Component, OnInit } from '@angular/core';
import { IContato } from '../agenda.models';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss']
})
export class ContatoFormComponent implements OnInit {
  
  contato: IContato;
  idContato: string;

  constructor(
    private servico: AgendaService, 
    private activatedRoute: ActivatedRoute,
    private router : Router,
  ) { 
    this.contato = {} as IContato;
    this.contato.telefones = [];
    this.activatedRoute.params.subscribe(param => this.idContato = param.id);
  }

  ngOnInit() {
    if(this.idContato != undefined){
      this.servico.obterPorId(this.idContato).subscribe(data => {
        this.contato = data
      });
    }
  }

  salvar(): void{
    if(this.idContato == undefined){
      this.servico.incluirContato(this.contato)
      .subscribe(x => {
        alert("Registro incluso com sucesso.")
        this.router.navigate(['']);
      });
    }
    else{
      this.servico.atualizarContato(this.contato)
      .subscribe(x => {
        alert("Registro atualizado com sucesso.")
        this.router.navigate(['']);
    });
    }
  }

  atualizarTelefones(telefones){
    this.contato.telefones = telefones;
  }
}
