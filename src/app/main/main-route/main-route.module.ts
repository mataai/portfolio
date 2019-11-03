import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from '../portfolio/portfolio.component';


const routes: Routes = [
  {   path: 'portfolio',   component: PortfolioComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRouteModule { }
