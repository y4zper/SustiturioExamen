import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Docente } from './docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private url= "http://localhost:8080/api/v1/docente";


  constructor(private httpClient : HttpClient) { }

  obtenerListaDocentes():Observable<Docente[]>{
    return this.httpClient.get<Docente[]>(`${this.url}`)
  }

  registrarDocente(docente:Docente): Observable<Object>{
    return this.httpClient.post(`${this.url}`,docente);
  }


  eliminarDocente(iddocente:number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${iddocente}`);
  }
}
