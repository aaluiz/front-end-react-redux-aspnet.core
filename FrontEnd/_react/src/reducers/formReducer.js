import {FORM_ADD_ITEM,FORM_DELETE_ITEM} from '../constants/constants';

export const formReducer = (state = [], action) =>{
    switch(action.type){
        case FORM_ADD_ITEM:
            return [...state, action.item];
        case FORM_DELETE_ITEM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}