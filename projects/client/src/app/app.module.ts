import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrumMachineModule } from './modules/drum-machine/drum-machine.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DrumMachineModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
