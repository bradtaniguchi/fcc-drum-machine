import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { Music } from '../../models/music';

export interface MusicState extends EntityState<Music> {
  downloading?: boolean;
  uploading?: boolean;
}

const adapter: EntityAdapter<Music> = createEntityAdapter<Music>();

export const musicReducer = createReducer<MusicState>(
  adapter.getInitialState({})
);
