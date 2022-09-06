import { authData, fetchUsers, removeUser, editUser } from "../redux/auth";
import * as api from "../api/index.js";


export const getUsers = () => async (dispatch) => {
  // dispatch(fetchPostsIsloading());
  try {
    const { data } = await api.fetchUsers();

    dispatch(fetchUsers(data));
  } catch (error) {
    // dispatch(fetchPostsError(error));
    console.log(error)
  }
};

export const updateUser = (id, userData, navigate) => async (dispatch) => {
  try {
    const updatedUser = await api.updateUser(id, userData);

console.log(updatedUser);
    dispatch(editUser(updatedUser));
    navigate("/students");
  } catch (error) {
    console.log(error);
  }
};

export const makePayment = (id, userData, navigate) => async (dispatch) => {
  try {
    const updatedUser = await api.makePayment(id, userData);

console.log(updatedUser);
    dispatch(editUser(updatedUser));
    navigate("/students");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
   await api.deleteUser(id);

    dispatch(removeUser(id));
  } catch (error) {
    console.log(error)
  }
};

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch(authData(data));

    navigate("/");
  } catch (error) {
    console.error(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  console.log(formData)
  try {
    const { data } = await api.signUp(formData);

    dispatch(authData(data));

    navigate("/");
  } catch (error) {
    console.error(error);
  }
};
