import { createAction, props } from '@ngrx/store';

export const musicActions = {
  load: createAction(
    '[MUSIC] LOAD',
    props<{
      id: string;
    }>()
  ),
  loadSuccess: createAction(
    '[MUSIC] LOAD_SUCCESS',
    props<{
      id: string;
    }>()
  ),
  loadFailed: createAction(
    '[MUSIC] LOAD_FAILED',
    props<{
      id: string;
    }>()
  ),

  loadMultiple: createAction(
    '[MUSIC] LOAD_MULTIPLE',
    props<{
      ids: string[];
    }>()
  ),
  loadMultipleFinished: createAction(
    '[MUSIC] LOAD_MULTIPLE_FINISHED',
    props<{
      ids: string[];
      failed: string[];
    }>()
  ),

  uploading: createAction(
    '[MUSIC] UPLOADING',
    props<{
      id: string;
    }>()
  ),
  uploadingSuccess: createAction(
    '[MUSIC] UPLOADING_SUCCESS',
    props<{
      id: string;
    }>()
  ),
  uploadingFailed: createAction(
    '[MUSIC] UPLOADING_FAILED',
    props<{
      id: string;
    }>()
  ),
};
