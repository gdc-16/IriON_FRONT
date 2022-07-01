import * as animalApi from '../../services/api/animal';
import { createPromiseThunk } from '../../services/asyncUtil';

/* 액션 타입 */
//전체 조회
export const ANIMAL_GET_ALL = 'ANIMAL_GET_ALL';
export const ANIMAL_GET_ALL_SUCCESS = 'ANIMAL_GET_ALL_SUCCESS';
export const ANIMAL_GET_ALL_ERROR = 'ANIMAL_GET_ALL_ERROR';

//부분 조회
export const ANIMAL_GET_ONE = 'ANIMAL_GET_ONE';
export const ANIMAL_GET_ONE_SUCCESS = 'ANIMAL_GET_ONE_SUCCESS';
export const ANIMAL_GET_ONE_ERROR = 'ANIMAL_GET_ONE_ERROR';

/* Action Creator */
export const animalAll = createPromiseThunk(ANIMAL_GET_ALL, animalApi.animalAll)
export const animalOne = createPromiseThunk(ANIMAL_GET_ONE, animalApi.animalOne)