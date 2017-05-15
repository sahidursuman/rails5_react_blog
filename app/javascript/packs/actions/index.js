import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = '/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  console.log(id)
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
