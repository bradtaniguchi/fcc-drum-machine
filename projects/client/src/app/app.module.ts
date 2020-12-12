import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppState } from './core/app-state';
import { buttonReducer } from './core/buttons/button.reducer';
import { musicReducer } from './core/music/music.reducer';
import { DrumMachineModule } from './modules/drum-machine/drum-machine.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Ngrx
    StoreModule.forRoot<AppState>(
      {
        buttons: buttonReducer,
        music: musicReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    // App Modules
    DrumMachineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
