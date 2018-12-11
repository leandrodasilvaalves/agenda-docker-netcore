import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { IContato } from '../agenda.models';
import Swal from 'sweetalert2'

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
    Swal({
      title: 'Tem certeza?',
      text: `Deseja realmente excluir o contato: ${ contato.nome }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Excluir',
    }).then((result) => {
      if (result.value) {
        this.servico.excluirContato(contato.id).subscribe(x => {
          this.contatos.splice(this.contatos.findIndex(c => c == contato),1);
          Swal(
            'Excluído!',
            'Contato excluído com sucesso.',
            'success'
          );
        });
      }
    });
  }
}
