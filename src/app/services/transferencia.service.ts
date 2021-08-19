import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransferenciaService {
  private url = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {}

  todas() {
    return this.http.get<Array<Transferencia>>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.http.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: Transferencia): void {
    transferencia.data = new Date();
  }
}
