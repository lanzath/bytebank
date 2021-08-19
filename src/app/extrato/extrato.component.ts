import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  // Dados recebidos via prop.
  @Input() transferencias!: Array<any>;

  constructor() {}

  ngOnInit(): void {}
}
