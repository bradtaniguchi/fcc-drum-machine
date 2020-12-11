import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface DrumMachineButton {
  display: string;
  key: string;
}
@Component({
  selector: 'dm-drum-machine',
  templateUrl: './drum-machine.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumMachineComponent implements OnInit {
  public buttons: Array<DrumMachineButton> = 'Q,W,E,A,S,D,Z,X,C'
    .split(',')
    .map((key) => ({
      display: key,
      key,
    }));
  constructor() {}

  ngOnInit(): void {}

  public onButtonClick(button: DrumMachineButton) {
    console.log('button', button);
    // TODO: do stuff
  }
}
