import { Component, OnInit } from '@angular/core';

let cashAmount: number = 200;
@Component({
  selector: 'app-cash-counter',
  templateUrl: './cash-counter.component.html',
  styleUrls: ['./cash-counter.component.css']
})
export class CashCounterComponent implements OnInit {

  public content = [];
  public depositTotal = 0;

  constructor() { }

  ngOnInit() {
    this.content[0] = new Money(0.05, '5c', 0);
    this.content[1] = new Money(0.10, '10c', 0);
    this.content[2] = new Money(0.25, '25c', 0);
    this.content[3] = new Money(1, '1$', 0);
    this.content[4] = new Money(2, '2$', 0);
    this.content[5] = new Money(5, '5$', 0);
    this.content[6] = new Money(10, '10$', 0);
    this.content[7] = new Money(20, '20$', 0);
    this.content[8] = new Money(50, '50$', 0);
    this.content[9] = new Money(100, '100$', 0);
  }

  public total(): number {
    return this.getArrayTotal(this.content);
  }

  public getArrayTotal(array): number {
    var total: number = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].qty * array[i].value;
    }
    return total;
  }

  countDeposit() {
    var total = this.total();
    var after = [null, null, null, null, null, null, null, null, null, null];
    for (let i = 0; i < this.content.length; i++) {
      after[i] = new Money(this.content[i].value, "", this.content[i].qty);
    }
    if (total <= 200) {
      alert("Le montant total est sous 200$ il n'y a donc rien a deposer.")
      
      this.depositTotal = 0;
      for (let j = 0; j < this.content.length; j++) {

        this.content[j].deposit = this.content[j].qty - after[j].qty;
        this.depositTotal += this.content[j].value * this.content[j].deposit;
      }
      return;
    }
    else {
      total = this.getArrayTotal(after);
      var difference = total - 200;
      var decimals = difference - Math.trunc(difference);
      decimals = Math.round(difference - Math.trunc(difference) * 100) / 100;

      for (let i = 0; i < after.length; i++) {
        var index = 2 - i < 0 ? 12 - i : 2 - i;
        if (index < 3) {
          var outdif = Math.trunc(decimals / after[index].value);
          if (after[index].qty >= outdif) {
            outdif = Math.trunc(decimals / after[index].value);
            after[index].qty -= outdif;
            decimals -= after[index].value * outdif;
          }
        }
        else {
          var outdif = Math.trunc(difference / after[index].value);
          if (after[index].qty >= outdif) {
            after[index].qty -= outdif;
            difference -= after[index].value * outdif;
          }

        }
      }




      this.depositTotal = 0;
      for (let j = 0; j < this.content.length; j++) {

        this.content[j].deposit = this.content[j].qty - after[j].qty;
        this.depositTotal += this.content[j].value * this.content[j].deposit;
      }

    {//#region old code 
      // for (let i = 3; i <= 0; i--) {
      //   if (after[i].qty >= outdif) {
      //     if (i < 3) {
      //       var outdif = Math.trunc(decimals / after[i].value);

      //       after[i].qty -= outdif;
      //       difference -= after[i].value * outdif;
      //       decimals -= after[i].value * outdif;
      //     }
      //     else {

      //       after[i].qty -= outdif;
      //       difference -= after[i].value * outdif;
      //     }
      //   }
      // }
      // for (let i = after.length; i <= 4; i--) {
      //   var outdif = Math.trunc(difference / after[i].value);
      //   if (after[i].qty >= outdif) {
      //     after[i].qty -= outdif;
      //     difference -= after[i].value * outdif;
      //   }
      // }


      // if (decimals != 0) {
      //   var outqty = Math.trunc(decimals / 0.25);
      //   if (after[2].qty > 2 && after[2].qty > outqty) {
      //     after[2].qty -= outqty;
      //     difference -= 0.25 * outqty;
      //     decimals -= 0.25 * outqty;
      //   }

      //   outqty = Math.trunc(decimals / 0.10);

      //   if (after[1].qty > 2 && outqty) {
      //     after[1].qty -= Math.trunc(decimals / 0.10);
      //     difference -= 0.10 * Math.trunc(decimals / 0.10);
      //     decimals -= 0.10 * Math.trunc(decimals / 0.10);
      //   }

      //   outqty = Math.trunc(decimals / 0.05);

      //   if (after[0].qty > 2 && after[0].qty > outqty) {
      //     after[0].qty -= Math.trunc(decimals / 0.05);
      //     difference -= 0.05 * Math.trunc(decimals / 0.05);
      //     decimals -= 0.05 * Math.trunc(decimals / 0.05);
      //   }
      // }

      // console.log(after[9].qty + ":" + difference + ":" + Math.trunc(difference / 100))
      // if (after[9].qty > Math.trunc(difference / 100)) {
      //   after[9].qty -= Math.trunc(difference / 100);
      //   difference -= 100 * Math.trunc(difference / 100);
      // }
      // else { after[9].qty = 0; }

      // if (after[8].qty > Math.trunc(difference / 50)) {
      //   after[8].qty -= Math.trunc(difference / 50);
      //   difference -= 50 * Math.trunc(difference / 50);
      // }
      // else {
      //   after[8].qty = 0;
      // }
      // if (after[7].qty > 2 && after[7].qty > Math.trunc(difference / 20)) {
      //   after[7].qty -= Math.trunc(difference / 20);
      //   difference -= 20 * Math.trunc(difference / 20);
      // }
      // else {
      //   after[7].qty = 0;
      // }
      // if (after[6].qty > 2 && after[6].qty > Math.trunc(difference / 10)) {
      //   after[6].qty -= Math.trunc(difference / 10);
      //   difference -= 10 * Math.trunc(difference / 10);
      // }
      // else {
      //   after[6].qty = 0;
      // }
      // if (after[5].qty > 2 && after[5].qty > Math.trunc(difference / 5)) {
      //   after[5].qty -= Math.trunc(difference / 5);
      //   difference -= 5 * Math.trunc(difference / 5);
      // }
      // else {
      //   after[5].qty = 0;
      // }
      // if (after[4].qty > 2 && after[4].qty > Math.trunc(difference / 2)) {
      //   after[4].qty -= Math.trunc(difference / 2);
      //   difference -= 2 * Math.trunc(difference / 2);
      // }
      // else {
      //   after[4].qty = 0;
      // }
      // if (after[3].qty > 2 && after[3].qty > Math.trunc(difference / 1)) {
      //   after[3].qty -= Math.trunc(difference / 1);
      //   difference -= 1 * Math.trunc(difference / 1);
      // }
      // else {
      //   after[3].qty = 0;
      // }
    }


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
