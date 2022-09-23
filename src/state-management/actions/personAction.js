/*import { PERSON_ADD, PERSON_GET_ALL, PERSON_REMOVE, PERSON_UPDATE } from "./actionTypes";

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
        type: PERSON_UPDATE,
        payload: person
    }
);
export const personGetAll = () => (
    {
        type: PERSON_GET_ALL
    }
);
*/
import {
    FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL
    , PERSON_ADD, PERSON_REMOVE, PERSON_UPDATE
} from "./actionTypes";
//action creator : 
export const getAllPosts = (dispatch) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    dispatch(fetchPostsStart());
    fetch(apiUrl).then(response => response.text())
        .then(data => {
            dispatch(fetchPostsSuccess(JSON.parse(data)));
        })
        .catch(e => { fetchPostsFail(e) });
}
export const fetchPostsStart = () => {
    return { type: FETCH_POSTS_START };
}
export const fetchPostsSuccess = (data) => {
    return { type: FETCH_POSTS_SUCCESS, payload: data };
}
export const fetchPostsFail = (errorMessage) => {
    return { type: FETCH_POSTS_FAIL, payload: errorMessage };
}


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
        type: PERSON_UPDATE,
        payload: person
    }
);