import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias$!: Observable<Array<Transferencia>>;

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias$ = this.transferenciaService.todas();
  }
}
