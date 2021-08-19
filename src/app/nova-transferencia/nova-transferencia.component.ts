import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  // propriedades inicializadas como undefined (!).
  valor!: number;
  destino!: number;

  // Extrai dados do componente para quem o invocou.
  @Output() aoTransferir = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  transferir(): void {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  private limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
