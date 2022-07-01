import {
    ANIMAL_GET_ALL,
    ANIMAL_GET_ALL_SUCCESS,
    ANIMAL_GET_ALL_ERROR,
    ANIMAL_GET_ONE,
    ANIMAL_GET_ONE_SUCCESS,
    ANIMAL_GET_ONE_ERROR,
} from '../actions/animalAction';
import {
    reducerUtils,
    handleAsyncActions,
} from '../../services/asyncUtil';

const initialState = {
    animalAll: reducerUtils.initial(),
    animalOne: reducerUtils.initial(),
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case ANIMAL_GET_ALL:
        case ANIMAL_GET_ALL_SUCCESS:
        case ANIMAL_GET_ALL_ERROR:
            return handleAsyncActions(ANIMAL_GET_ALL, 'animalAll')(state, action);
        case ANIMAL_GET_ONE:
        case ANIMAL_GET_ONE_SUCCESS:
        case ANIMAL_GET_ONE_ERROR:
            return handleAsyncActions(ANIMAL_GET_ONE, 'animalOne')(state, action);
        default:
            return state;
    }
}
