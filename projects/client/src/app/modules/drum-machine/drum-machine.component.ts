import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface DrumMachineButton {
  display: string;
  key: string;
  music: string;
}
@Component({
  selector: 'dm-drum-machine',
  templateUrl: './drum-machine.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumMachineComponent implements OnInit {
  public buttons: Array<DrumMachineButton> = [
    {
      display: 'Q',
      key: 'q',
      music: '178[kb]synth-melody-hyperion1.wav.mp3',
    },
    {
      display: 'W',
      key: 'w',
      music: '175[kb]synth-melody-hyperion2.wav.mp3',
    },
    {
      display: 'E',
      key: 'e',
      music: '173[kb]synth-melody-hyperion3.wav.mp3',
    },
    {
      display: 'A',
      key: 'a',
      music: '26[kb]BDRUM13.aif.mp3',
    },
    {
      display: 'S',
      key: 's',
      music: '39[kb]8000clap16.wav.mp3',
    },
    {
      display: 'D',
      key: 'd',
      music: '160[kb]ambient_kick.aif.mp3',
    },
    {
      display: 'Z',
      key: 'z',
      music: '51[kb]hrcsnare-37.wav.mp3',
    },
    {
      display: 'X',
      key: 'x',
      music: '57[kb]acoustic_snare.aif.mp3',
    },
    {
      display: 'C',
      key: 'c',
      music: '233[kb]dyeahhhhuh.aif.mp3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  public onButtonClick(button: DrumMachineButton, audio: HTMLAudioElement) {
    console.log('button', button);
    audio.play();
    // TODO: do stuff
  }
}
