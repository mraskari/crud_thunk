import axios from "axios";
import {
  ADD_NEW_POST,
  CLEAR_ERROR,
  DELETE_SINGLE_POST,
  EDIT_CURRENT_POST,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_IN_PROGRESS,
  FETCH_POSTS_LIST,
  SET_EXPANDED_ACCARDION,
} from "../action-types";

export const setExpandedAccardion = (data) => {
  return {
    type: SET_EXPANDED_ACCARDION,
    payload: data,
  };
};

export const fetchPostsList = (actionType, data) => {
  let response = [];
  return async (dispatch, store) => {
    dispatch({ type: FETCH_POSTS_IN_PROGRESS });
    try {
      switch(actionType) {
        case FETCH_POSTS_LIST:
          response = await axios.get(
            "http://127.0.0.1:4000/posts"
          );
          break;
        case EDIT_CURRENT_POST:
          response = await axios.put(
            `http://127.0.0.1:4000/posts/${data.id}`, data
          );
          break;
        case DELETE_SINGLE_POST:
          response = await axios.delete(
            `http://127.0.0.1:4000/posts/${data}`
          );
        case ADD_NEW_POST:
          response = await axios.post(
            "http://127.0.0.1:4000/posts", data
          );
      

      }

      console.log(response.data);

      dispatch({
        type: actionType,
        payload: actionType == DELETE_SINGLE_POST ? data : response.data,
      });

    } catch (e) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: e.message,
      });
    }
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};

// export const fetchPos = () => {
//   return {
//     type: FETCH_POSTS_LIST,
//   };
// };

// export const setPostsListData = (data) => {
//   return {
//     type: SET_POSTS_LIST_DATA,
//     payload: data,
//   };
// };

// export const addResponseToPostsListData = (data) => {
//   return {
//     type: ADD_RESP_TO_POSTS_LIST,
//     payload: data,
//   };
// };

// export const addNewPost = (data) => {
//   return {
//     type: ADD_NEW_POST,
//     payload: data,
//   };
// };

// export const deletePostFromList = (postId) => {
//   return {
//     type: DELETE_SINGLE_POST,
//     payload: postId,
//   };
// };

// export const deletePostFromListData = (postId) => {
//   return {
//     type: DELETE_POST_FROM_LIST,
//     payload: postId,
//   };
// };

// export const editCurrentPost = (data) => {
//   return {
//     type: EDIT_CURRENT_POST,
//     payload: data,
//   };
// };

// export const setEditedPostToList = (data) => {
//   return {
//     type: SET_EDITED_POST_TO_LIST,
//     payload: data,
//   };
// };

// export const setApiError = (data) => {
//   return {
//     type: SET_API_ERROR,
//     payload: data,
//   };
// };

// export const clearError = () => {
//   return {
//     type: CLEAR_ERROR
//   };
// };