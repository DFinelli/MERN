// import all file from  as api
import * as api from '../api';

// Action Creators

// redux thunk is  .. async (dispatch) ---- it lets us return a function dispatch(action) 
// instead of returning an action object
export const getPosts = () => async (dispatch) => {
    try {
        // getting data object from response via shorthand {data}
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data})

    } catch (error) {
        console.log(error);

    }
}