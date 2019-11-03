import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CashCounterComponent } from '../cash-counter/cash-counter.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  {   path: 'utils',   component: MainComponent },
  {   path: 'utils/cashcounter',   component: CashCounterComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UtilsRoute { }
