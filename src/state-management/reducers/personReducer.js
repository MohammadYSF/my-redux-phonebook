/*import { PERSON_ADD, PERSON_GET_ALL, PERSON_REMOVE, PERSON_UPDATE } from "../actions/actionTypes";

const initialState = [
    { id: 1, name: "Mohammad Yousefian", phone: "1234567" }
];
export const personReducer = (state = [...initialState], action) => {
    switch (action.type) {
        case PERSON_GET_ALL:
            return [...state];
        case PERSON_ADD:
            return [...state, action.payload];
        case PERSON_REMOVE:
            return [...state.filter(a => a.id !== action.payload.id)];
        case PERSON_UPDATE:
            let newData = [...state];
            newData.find(a => a.id === action.payload.id).name = action.name;
            newData.find(a => a.id === action.payload.id).phone = action.phone;
            return newData;
        default:
            return state;
    }
}*/
import {
    FETCH_POSTS_FAIL, FETCH_POSTS_SUCCESS, FETCH_POSTS_START,
    PERSON_ADD, PERSON_REMOVE, PERSON_UPDATE
} from '../actions/actionTypes';
const initialState = {
    items: [],
    isLoading: false,
    message: ''
};
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_START:
            return { items: [], message: '', isLoading: true }
            break;
        case FETCH_POSTS_SUCCESS:
            return { items: action.payload, message: '', isLoading: false };
            break;
        case FETCH_POSTS_FAIL:
            return { items: [], message: action.payload, isLoading: false };
        case PERSON_ADD:
            return { items: [...state.items, action.payload], message: '', isLoading: false };
        case PERSON_REMOVE:
            return { items: [...state.items.filter(a => a.id !== action.payload.id)], message: '', isLoading: false };
        case PERSON_UPDATE:
            let newData = [...state.items];
            newData.find(a => a.id === action.payload.id).name = action.name;
            newData.find(a => a.id === action.payload.id).phone = action.phone;
            return { items: newData, message: '', isLoading: false };
        default:
            return initialState;
            break;
    }
}