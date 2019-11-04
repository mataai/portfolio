import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cash-counter',
  templateUrl: './cash-counter.component.html',
  styleUrls: ['./cash-counter.component.css']
})

export class CashCounterComponent implements OnInit {

  public content = [];
  @ViewChild('0') fivecent: ElementRef;
  @ViewChild('1') tencent: ElementRef;
  @ViewChild('2') twenyfivecent: ElementRef;
  @ViewChild('3') onedol: ElementRef;
  @ViewChild('4') twodol: ElementRef;
  @ViewChild('5') fivedol: ElementRef;
  @ViewChild('6') tendol: ElementRef;
  @ViewChild('7') twentydol: ElementRef;
  @ViewChild('8') fifthydol: ElementRef;
  @ViewChild('9') hundreddol: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.content[0] = new Money(0.05, "5c");
    this.content[1] = new Money(0.10, "10c");
    this.content[2] = new Money(0.25, "25c");
    this.content[3] = new Money(1, "1$");
    this.content[4] = new Money(2, "2$");
    this.content[5] = new Money(5, "5$");
    this.content[6] = new Money(10, "10$");
    this.content[7] = new Money(20, "20$");
    this.content[8] = new Money(50, "50$");
    this.content[9] = new Money(100, "100$");
  }

  

}

function Money(value, desc) {
  this.value = value;
  this.desc = desc;
  this.qty = 1;
  this.html;
}
