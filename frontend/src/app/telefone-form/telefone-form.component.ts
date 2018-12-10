import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITelefone } from '../agenda.models';

@Component({
  selector: 'app-telefone-form',
  templateUrl: './telefone-form.component.html',
  styleUrls: ['./telefone-form.component.scss']
})
export class TelefoneFormComponent implements OnInit {

  telefone: ITelefone;
  telefones: ITelefone[];

  @Output()
  telefonesEvent = new EventEmitter();

  constructor() { 
    this.telefone = {} as ITelefone;    
    this.telefones = [];
  }

  ngOnInit() {    
  }
  
  add(telefone: ITelefone){
    this.telefones.push(telefone);
    this.telefone = {} as ITelefone;
    this.telefonesEvent.emit(this.telefones);
  }

  onTelefoneEdit(telefone):void{
    this.telefone = telefone;
  }

  onTelefoneRemove(telefones): void{
    this.telefones = telefones;
    this.telefonesEvent.emit(telefones);
  }
}
