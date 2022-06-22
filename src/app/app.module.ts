import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { RestartscreenComponent } from './restartscreen/restartscreen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerDisplayComponent } from './player-display/player-display.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecardComponent,
    StartscreenComponent,
    RestartscreenComponent,
    PlayerDisplayComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
