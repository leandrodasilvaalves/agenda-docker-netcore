import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContato } from './agenda.models';
import { Observable } from 'rxjs';


const _endpoint = 'http://localhost:7000/v1/contatos';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {  

  constructor(private http: HttpClient) { }  

  public obterContatos(): Observable<IContato[]>{
    return this.http.get<IContato[]>(_endpoint);
  }

  public obterPorId(id: string): Observable<IContato> {
    return this.http.get<IContato>(`${_endpoint}/${id}`);
  }

  public incluirContato(contato: IContato){ 
    return this.http.post(_endpoint, contato);
  }

  public atualizarContato(contato: IContato){
    return this.http.put(_endpoint, contato);
  }

  public excluirContato(id: string){
    return this.http.delete(`${_endpoint}/${id}`);
  }
}
