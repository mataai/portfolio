import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { SepaqModule } from './sepaq/sepaq.module';
import {ClipboardModule} from '@angular/cdk/clipboard';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainModule,
    SepaqModule,
    ClipboardModule
  ],

  providers: [ClipboardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
