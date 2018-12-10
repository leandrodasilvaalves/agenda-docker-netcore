import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITelefone } from '../agenda.models';

@Component({
  selector: 'app-telefone-lista',
  templateUrl: './telefone-lista.component.html',
  styleUrls: ['./telefone-lista.component.scss']
})
export class TelefoneListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  telefones: ITelefone[];
  
  @Input()
  displayCommands: boolean;

  @Output()
  telefoneEdit = new EventEmitter();

  @Output()
  telefoneRemove = new EventEmitter();

  editar(telefone:ITelefone): void{
    this.removeArray(telefone);
    this.telefoneEdit.emit(telefone);
  }
  
  remover(telefone: ITelefone): void{
    this.removeArray(telefone);
    this.telefoneRemove.emit(this.telefones);
  }
  
  private removeArray(telefone: ITelefone):void{
    this.telefones.splice(this.telefones.findIndex(t => t === telefone),1);
  }
}
