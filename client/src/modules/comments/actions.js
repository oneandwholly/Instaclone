import axios from 'axios';
import app from '../app';
import * as c from './actionTypes';

import photos from '../photos';

export const fetchCommentById = (comment_id) => {
  return (dispatch, getState) => {
    // let photo = getState()['photos'].byId[photo_id];
    // if (photo) {
    //   dispatch({
    //     type: 'PHOTO_ALREADY_EXISTS'
    //   });
    //   return new Promise((resolve, reject) => {
    //     resolve(photo);
    //   });
    // }
    const config = {
      headers: { authorization: localStorage.getItem('token') }
    };

    return axios.get(`${app.constants.ROOT_URL}/api/v1/comments/${comment_id}`, config)
    .then((res) => {
      dispatch({
        type: c.ADD,
        payload: res.data
      });
      return res.data;
    })

  }
}

export const addComment = ({ comment_text, photo_id }) => {
  return (dispatch) => {
    const body = {
      comment_text,
      photo_id
    };
    const config = {
      'content-type': 'application/json;charset=UTF-8',
      headers: { authorization: localStorage.getItem('token')}
    };

    let comment_id;
    return axios.post(`${app.constants.ROOT_URL}/api/v1/comments`, body, config)
      .then(res => {
        comment_id=res.data.insertId;
        dispatch(fetchCommentById(comment_id)).then((res) => {
          let photo_id = res.photo_id;
          let comments = null;
          if (!Array.isArray(res)) {
            comments=[res]
          }
          dispatch(photos.actions.addCommentsToPhoto({ photo_id: res.photo_id , comments }))
        })
      })
  }
}
