import { PERSON_ADD, PERSON_GET_ALL, PERSON_REMOVE, PERSON_UPDATE } from "../actions/actionTypes";

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
            return [...state];
    }
}