import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickCounterDirective } from './directives/click-counter.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const material = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatCardModule
]
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ClickCounterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
