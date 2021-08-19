import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  // propriedades inicializadas como undefined (!).
  valor!: number;
  destino!: string;

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  transferir(): void {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.transferenciaService.adicionar(valorEmitir).subscribe(
      () => this.router.navigate(['/extrato']),
      (err) => console.log(err)
    );

    this.limparCampos();
  }

  private limparCampos(): void {
    this.valor = 0;
    this.destino = '0';
  }
}
