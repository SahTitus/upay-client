import { configureStore } from '@reduxjs/toolkit';
import authSlice  from '../redux/auth';


export default configureStore({
	reducer: {
		auth: authSlice,

	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});