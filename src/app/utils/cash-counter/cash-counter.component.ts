import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

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
    this.content[0] = new Money(0.05, '5c',0);
    this.content[1] = new Money(0.10, '10c',0);
    this.content[2] = new Money(0.25, '25c',0);
    this.content[3] = new Money(1, '1$',0);
    this.content[4] = new Money(2, '2$',0);
    this.content[5] = new Money(5, '5$',0);
    this.content[6] = new Money(10, '10$',0);
    this.content[7] = new Money(20, '20$',0);
    this.content[8] = new Money(50, '50$',0);
    this.content[9] = new Money(100, '100$',0);
  }

  public total(): number {
    return this.getArrayTotal(this.content);
  }

  public getArrayTotal(array): number {
    var total: number = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].qty * this.content[i].value;
    }
    return total;
  }

  countDeposit() {
    var total = this.total();
    var after = [null,null,null,null,null,null,null,null,null,null];
    console.log(after);
    console.log(this.content)
    for (let i = 0; i < this.content.length; i++) {
      after[i] = new Money(this.content[i].value,"",this.content[i].qty);
    }
    if (total <= 200) {
      alert("Le montant total est sous 200$ il n'y a donc rien a deposer.")
      return;
    }
    else {
      total = this.getArrayTotal(after);
      var difference = total - 200;
      console.log("diff: "+difference);
      var decimals = difference - Math.trunc(difference);
        after[2].qty -= Math.trunc(decimals/0.25);
        difference -= 0.25 * Math.trunc(decimals/0.25);
        decimals -= 0.25 * Math.trunc(decimals/0.25);
        after[1].qty -= Math.trunc(decimals/0.10);
        difference -= 0.10 * Math.trunc(decimals/0.10);
        decimals -= 0.10 * Math.trunc(decimals/0.10);
        after[0].qty -= Math.trunc(decimals/0.10);
        difference -= 0.05 * Math.trunc(decimals/0.05); 
        decimals -= 0.05 * Math.trunc(decimals/0.05);
      
        after[9].qty -= Math.trunc(difference/100);
        difference -= 100 * Math.trunc(difference/100);
        after[8].qty -= Math.trunc(difference/50);
        difference -= 50 * Math.trunc(difference/50);
        after[7].qty -= Math.trunc(difference/20);
        difference -= 20 * Math.trunc(difference/20);
        after[6].qty -= Math.trunc(difference/10);
        difference -= 10 * Math.trunc(difference/10);
        after[5].qty -= Math.trunc(difference/5);
        difference -= 5 * Math.trunc(difference/5);
        after[4].qty -= Math.trunc(difference/2);
        difference -= 2 * Math.trunc(difference/2);
        after[3].qty -= Math.trunc(difference/1);
        difference -= 1 * Math.trunc(difference/1);
  
      
      for (let i = 0; i < this.content.length; i++) {
        this.content[i].deposit = this.content[i].qty - after[i].qty;
      }
      console.log("------");
      console.log(this.content);

    }
  }

}

export class Money {

  public value;
  public desc;
  public qty = 0;
  public deposit = 0;

  constructor(value, desc, qty) {
    this.value = value;
    this.desc = desc;
    this.qty = qty;
  }
}
