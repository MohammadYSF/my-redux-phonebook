import { PERSON_ADD, PERSON_GET_ALL, PERSON_REMOVE, PERSON_UPDATE } from "./actionTypes";

export const personAdd = (person) => ({
    type: PERSON_ADD,
    payload: person
});
export const personRemove = (person) => (
    {
        type: PERSON_REMOVE,
        payload: person
    }
);
export const personUpdate = (person) => (
    {
        type:PERSON_UPDATE,
        payload:person
    }
);
export const personGetAll = () => (
    {
        type:PERSON_GET_ALL
    }
);