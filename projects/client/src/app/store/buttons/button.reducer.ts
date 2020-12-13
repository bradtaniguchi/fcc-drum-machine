import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { Button } from '../../models/button';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonState extends EntityState<Button> {}

const adapter: EntityAdapter<Button> = createEntityAdapter<Button>();

export const buttonReducer = createReducer<ButtonState>(
  adapter.getInitialState({})
);
