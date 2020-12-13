import { createAction, props } from '@ngrx/store';

export const themeActions = {
  load: createAction('[THEME] LOAD'),
  set: createAction(
    '[THEME] SET',
    props<{
      theme: string;
    }>()
  ),
};
