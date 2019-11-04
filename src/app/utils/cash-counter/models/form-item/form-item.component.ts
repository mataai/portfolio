import {
  Component, Input,
  OnInit,
  OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';
import { ComponentStillLoadingError } from '@angular/core/src/linker/compiler';

@Component({
  selector: 'form-item',
  template: `
    <div class="form-group">
      <div class="row">
        <input type="number" class="col-md-3 form-control" (change)="update($event)" placeholder="Quantité de {{this.desc}}">
        <p class="col-md-1">x {{this.value}} </p>
        <p class="col-md-3">{{this.sum}}</p>
      </div>
    </div>`,
})
export class FormItemComponent implements OnInit {
  @Input() qty: number = 0;
  @Input() value: number;
  @Input() desc: string;


  constructor() { }

  update(event) {
    this.setQuantity = event.target.value;
    console.log(this.value);
  }

  get quantity(){
    return this.qty;
  }

  set setQuantity(value){
    this.qty = value;
  }

  get sum(){
    if (this.value < 1){
      return (this.value * this.quantity).toFixed(2);
    }
    else{
      return (this.value * this.quantity).toFixed(0);
    }
  }

  ngOnInit() {

  }

}
