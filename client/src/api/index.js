import axios from "axios";

const url = "https://memories-application-sassi.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);

export const addPost = (newPost) => axios.post(url, newPost);

export const upadatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/like`);
