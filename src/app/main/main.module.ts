import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouteModule } from './main-route.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { JobsPanelComponent } from './components/jobs-panel/jobs-panel.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { ProjectsPanelComponent } from './components/projects-panel/projects-panel.component';
import { OldPortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [CommonModule, MainRouteModule],
  declarations: [
    OldPortfolioComponent,
    PortfolioComponent,
    JobsPanelComponent,
    MainPanelComponent,
    SidePanelComponent,
    ProjectsPanelComponent,
  ],
})
export class MainModule { }
