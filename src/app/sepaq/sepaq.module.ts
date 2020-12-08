import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { SepaqRoute } from './sepaq-route';
import { CashCounterComponent } from './cash-counter/cash-counter.component';
import { FormItemComponent } from './cash-counter/models/form-item/form-item.component';
import {ClipboardModule} from '@angular/cdk/clipboard';  


@NgModule({
  declarations: [StatistiquesComponent, MainComponent,NavComponent,CashCounterComponent,FormItemComponent],
  imports: [
    CommonModule,
    SepaqRoute,
    FormsModule,
    ClipboardModule
  ]
})
export class SepaqModule { }
