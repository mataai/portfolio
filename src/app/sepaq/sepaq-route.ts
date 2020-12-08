import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CashCounterComponent } from './cash-counter/cash-counter.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
  {   path: 'sepaq',   component: MainComponent },
  {   path: 'sepaq/cash',   component: CashCounterComponent },
  {   path: 'sepaq/stats',   component: StatistiquesComponent },
  {   path: '*',   component: MainComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SepaqRoute { }
