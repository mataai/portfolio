import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilsModule } from './utils/utils.module';
import { MainModule } from './main/main.module';
import { NavComponent } from './utils/nav/nav.component';
import { MainComponent } from './utils/main/main.component';
import { CashCounterComponent } from './utils/cash-counter/cash-counter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UtilsModule,
    MainModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
