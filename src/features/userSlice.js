import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // inside reducers we have action.
    // We can go ahead and dispatch an action and then it will do the defined behaviour and manipulate. Eg: We can dispatch login action and it will do what is defined inside it.
    // We interact with the global store by dispatching actions. We here have created 2 actions: login and logout.
    // Here, login and logout actions have a way of affecting the user section of the store. That is why they are created user reducer or the user Slice.
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// If we push things into the global store(here user store), we push information into the user store by using actions. To get a piece of information out of the global store, I need to create selectors. Then selector will go ahead and give back the value needed.
//This is a selector selectUser. It goes into the user slice of the state and then we go ahead and get the user.
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
