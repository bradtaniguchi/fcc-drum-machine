import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout/grid';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DrumMachineComponent } from './drum-machine.component';

@NgModule({
  declarations: [DrumMachineComponent],
  imports: [
    CommonModule,
    // Angular Material
    GridModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DrumMachineModule {}
