import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { IContato } from '../agenda.models';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.component.html',
  styleUrls: ['./contato-lista.component.scss']
})
export class ContatoListaComponent implements OnInit {

  contatos: IContato[];

  constructor(private servico: AgendaService) { }

  ngOnInit() {
    this.obterContatos();
  }

  obterContatos() {
    this.servico.obterContatos().subscribe((data: IContato[]) => {
      this.contatos = data;
    });
  }

  excluir(contato: IContato): void {
    if (confirm(`Deseja excluir o contato: ${contato.nome} ?`)) {
      this.servico.excluirContato(contato.id).subscribe(x => {
        alert('Excluído com sucesso');
        this.contatos.splice(this.contatos.findIndex(c => c == contato),1);
      });
    }
  }
}
