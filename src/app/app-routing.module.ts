import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'utils/*', redirectTo: 'utils', pathMatch: 'full' },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
