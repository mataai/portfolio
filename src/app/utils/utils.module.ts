import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashCounterComponent } from './cash-counter/cash-counter.component';
import { UtilsRoute } from "./utils-route/utils-route";


@NgModule({
  imports: [
    CommonModule,
    UtilsRoute

  ],
  declarations: [CashCounterComponent]
})
export class UtilsModule { }
