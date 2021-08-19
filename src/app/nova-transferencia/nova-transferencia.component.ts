import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  // propriedades inicializadas como undefined (!).
  valor!: number;
  destino!: number;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log(this.valor);
    console.log(this.destino);
  }
}
