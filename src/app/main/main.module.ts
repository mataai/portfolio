import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouteModule } from "./main-route/main-route.module";
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouteModule
  ],
  declarations: [PortfolioComponent]
})
export class MainModule { }
