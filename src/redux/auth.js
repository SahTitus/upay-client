import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authData: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
      console.log(action.payload);
    },

    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    editUser: (state, action) => {
			state.posts = state.users.map((user) => user._id === action.payload._id ? action.payload : user );
		},
    logout: (state) => {
      localStorage.removeItem("profile");
      state.user = null;
    },
    removeUser: (state, action) => {
			state.users = state.users.filter((user) => user._id !== action.payload);
		},
  },
});

export const { authData, logout, fetchUsers, removeUser, editUser } = authSlice.actions;
export default authSlice.reducer;
