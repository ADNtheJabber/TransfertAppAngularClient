import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmetteurService {

  private urlapi = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private _httpClient: HttpClient) { }

  getTransfert(id: number): Observable<> {
    return this._httpClient.get<Transfert>(`${this.urlapi}/${id}`);
  }

  saveTransfert(transfert: Transfert): Observable<Transfert> {
    return this._httpClient.post<Transfert>(`${this.urlapi}`, transfert);
  }

  deleteTransfert(id: number): Observable<any> {
    return this._httpClient.delete(`${this.urlapi}/${id}`, { responseType: 'text' });
  }

  getAllTransferts(): Observable<any> {
    return this._httpClient.get(`${this.urlapi}`);
  }
}