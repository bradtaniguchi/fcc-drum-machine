import { createReducer } from '@ngrx/store';

export interface ThemeState {
  theme?: string;
}

export const themeReducer = createReducer<ThemeState>({});
