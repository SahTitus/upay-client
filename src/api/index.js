import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });


API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = (page) => API.get(`/posts`);
export const createPost = (newPost) => API.post(`/posts`, newPost);
export const deleteUser = (id) => API.delete(`/user/${id}/delete`);
export const pushReply = (id, reply) => API.patch(`/comments/${id}/reply`, reply);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const fetchUsers = () => API.get(`/user/users`);
export const updateUser = (id, updatedUser) => API.patch(`/user/${id}`, updatedUser);
export const makePayment = (id, paymentData) => API.patch(`/user/${id}/pay`, paymentData);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
