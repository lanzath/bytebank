import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: Array<any> = [];

  transferir($event): void {
    // desestruturação do objeto com spread operator (...)
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }
}
