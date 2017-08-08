import axios from 'axios';

import app from '../app';
import * as p from './actionTypes';

export function postPhotos(data, cb) {
  return function(dispatch) {

    Date.prototype.toBasicISOString = function() {
      return this.toISOString().replace(/[:\-]|\.\d{3}/g, '');
    }

    function getDateStr(d) {
      function pad(num) {
        return num.toString().length === 1 ? '0' + num : num
      }
      return d.getFullYear().toString() + pad(d.getMonth() + 1) + pad(d.getDate())
    }

    let file = data.files[0];
    const AWS_ACCESS_KEY_ID = 'AKIAJQOR3RTYHRS7OKDA';

    const d = new Date();
    const bucket = 'instaclone-pictures';
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const algorithm = 'AWS4-HMAC-SHA256';
    const credential = [
        AWS_ACCESS_KEY_ID,
        getDateStr(d),
        'us-east-1',
        's3',
        'aws4_request'
      ].join('/');
    const dStr = d.toBasicISOString();

    const body = {
      acl: 'public-read',
      bucket: bucket,
      key: key,
      caption: data.caption,
      'x-amz-algorithm': algorithm,
      'x-amz-credential': credential,
      'x-amz-date': dStr
    };
    const config = {
      'content-type': 'application/json;charset=UTF-8',
      headers: { authorization: localStorage.getItem('token')}
    };
    const s3Url = 'https://' + bucket + '.s3.amazonaws.com/';
    let photo_id;
    return axios.post(`${app.constants.ROOT_URL}/api/v1/photos`, body, config)
      .then(res => {
        photo_id=res.data.insertId;
        let body = new FormData();
        body.append('key', key); // order matters?
        body.append('file', file);
        body.append('policy', res.data.policy);
        body.append('x-amz-algorithm', algorithm);
        body.append('x-amz-credential', credential);
        body.append('x-amz-date', dStr);
        body.append('x-amz-signature', res.data.signature);

        return axios.post(s3Url, body);
      })
      .then((res) => {
        dispatch(getPhotoById(photo_id))
        cb();
      })
  }
}

export const getPhotoById = (photo_id) => {
  return (dispatch) => {

      const config = {
        headers: { authorization: localStorage.getItem('token') }
      };

      return axios.get(`${app.constants.ROOT_URL}/api/v1/photos/${photo_id}`, config)
        .then((res) => {
          dispatch({
            type: p.ADD,
            payload: res.data
          });
        })

  }
}

export const fetchPhotosByUserId = (user_id) => {
  return (dispatch) => {
    const config = {
      headers: { authorization: localStorage.getItem('token') }
    };

    return axios.get(`${app.constants.ROOT_URL}/api/v1/users/${user_id}/photos`, config)
      .then((res) => {
        console.log('photos', res.data);
          dispatch({
            type: p.ADD_ARRAY,
            payload: res.data
          })
          return res.data;
      })
  }
}
