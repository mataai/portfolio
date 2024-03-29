import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'portfolio/',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
