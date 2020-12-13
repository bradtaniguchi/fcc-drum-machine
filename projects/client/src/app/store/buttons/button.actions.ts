import { createAction, props } from '@ngrx/store';
import { Button } from '../../models/button';

export const buttonActions = {
  click: createAction(
    '[BUTTON] CLICK',
    props<{
      id: string;
    }>()
  ),
  clickDone: createAction(
    '[BUTTON] CLICK_DONE',
    props<{
      id: string;
    }>()
  ),

  add: createAction(
    '[BUTTON] ADD',
    props<{
      id: string;
    }>()
  ),

  remove: createAction(
    '[BUTTON] REMOVE',
    props<{
      id: string;
    }>()
  ),

  update: createAction(
    '[BUTTON] UPDATE',
    props<{
      entity: Button;
    }>()
  ),
};
