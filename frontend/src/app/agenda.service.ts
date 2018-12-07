import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const _endpoint = 'http://localhost:7000/api/contatos';
const _httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AgendaService {  

  constructor(private http: HttpClient) { }  

  public obterContatos(){
    return this.http.get(_endpoint);
  }
}
