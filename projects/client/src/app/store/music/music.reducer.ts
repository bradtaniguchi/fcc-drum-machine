import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Music } from '../../models/music';
import { musicActions } from './music.actions';

export interface MusicState extends EntityState<Music> {
  downloading?: boolean;
  uploading?: boolean;
}

const adapter: EntityAdapter<Music> = createEntityAdapter<Music>();

export const musicReducer = createReducer<MusicState>(
  adapter.getInitialState({}),
  on(
    musicActions.load,
    (state) => ({ ...state, downloading: true } as MusicState)
  ),
  on(
    musicActions.loadSuccess,
    (state) => ({ ...state, downloading: false } as MusicState)
  ),
  on(
    musicActions.loadFailed,
    (state) => ({ ...state, downloading: false } as MusicState)
  ),

  on(
    musicActions.loadMultiple,
    (state) => ({ ...state, downloading: true } as MusicState)
  ),
  on(
    musicActions.loadMultipleFinished,
    (state) => ({ ...state, downloading: false } as MusicState)
  ),

  on(
    musicActions.uploading,
    (state) =>
      ({
        ...state,
        uploading: true,
      } as MusicState)
  ),
  on(
    musicActions.uploadingSuccess,
    (state) =>
      ({
        ...state,
        uploading: false,
      } as MusicState)
  ),
  on(
    musicActions.uploadingFailed,
    (state) =>
      ({
        ...state,
        uploading: false,
      } as MusicState)
  )
);
