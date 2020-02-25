import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickCounterDirective } from './directives/click-counter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ClickCounterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
