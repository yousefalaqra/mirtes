import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './game/card/card.component';
import { DeckComponent } from './game/deck/deck.component';
import { ShapeComponent } from './game/card/shape/shape.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DeckComponent,
    ShapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
