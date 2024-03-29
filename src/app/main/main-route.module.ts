import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OldPortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', component: OldPortfolioComponent },
  { path: 'new', component: PortfolioComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRouteModule { }
