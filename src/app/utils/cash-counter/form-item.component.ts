import { Component } from "@angular/core";

@Component({
    selector: 'form-item',
    template: `
      <input #box (keyup)="onKey(box.value)">
      <p>{{values}}</p>
    `
  })
  export class FormItemComponent {
    values = '';
    onKey(value: string) {
      this.values += value + ' | ';
    }
  }