import { ButtonState } from './buttons/button.reducer';
import { MusicState } from './music/music.reducer';
import { ThemeState } from './theme/theme.reducer';

export interface AppState {
  buttons: ButtonState;
  music: MusicState;
  theme: ThemeState;
}
