import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class Button {
  @Input() label: string
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'Adicionar ao carrinho'
  };
  // event binding
  getAlert(num: number) {
    alert(num);
  }

}