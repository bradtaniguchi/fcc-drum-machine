import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout/grid';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DrumMachineComponent } from './drum-machine.component';

@NgModule({
  declarations: [DrumMachineComponent],
  imports: [
    CommonModule,
    // Angular Material
    GridModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class DrumMachineModule {}
