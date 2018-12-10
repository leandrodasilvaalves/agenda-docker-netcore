import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContato } from './agenda.models';


const _endpoint = 'http://localhost:7000/api/contatos';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {  

  constructor(private http: HttpClient) { }  

  public obterContatos(){
    return this.http.get(_endpoint);
  }

  public incluirContato(contato: IContato){  
    return this.http.post(_endpoint, contato);
  }
}
