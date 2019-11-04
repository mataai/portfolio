import {
  Component, Input,
  OnInit
} from '@angular/core';
import { Money } from '../../cash-counter.component';

@Component({
  selector: 'form-item',
  template: `<div class="form-group">
      <div class="row">
        <input type="number" class="col-md-3 form-control" (change)="update($event)" placeholder="Quantité de {{this.money.desc}}">
        <p class="col-md-1">x {{this.money.value}} </p>
        <p class="col-md-3">{{this.sum}}</p>
        <p class="col-md-3">{{this.money.deposit}}</p>
      </div>
    </div>`,
})
export class FormItemComponent implements OnInit {
  @Input() money: Money;


  constructor() { }

  update(event) {
    this.setQuantity = event.target.value;
  }

  get quantity() {
    return this.money.qty;
  }

  set setQuantity(value) {
    this.money.qty = value;
  }

  get sum() {
    if (this.money.value < 1) {
      return (this.money.value * this.quantity).toFixed(2);
    }
    else {
      return (this.money.value * this.quantity).toFixed(0);
    }
  }

  ngOnInit() {
  }

}
