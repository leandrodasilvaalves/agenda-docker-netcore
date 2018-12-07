import { Component, OnInit, Input } from '@angular/core';
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
  
}
