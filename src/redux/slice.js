import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  register,
  logIn,
  logOut,
  getUser,
} from './operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.loading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.loading = false;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      Notify.success(`Welcome, ${action.payload.user.name} &#129303;`);
    },
    [register.rejected](state) {
      state.loading = false;
      Report.warning(
        'Warning',
        `Something went wrong or user with this name already exists!`,
        'Okay'
      );
    },
    [logIn.pending](state) {
      state.loading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
      Notify.success(
        `Glad to see you again, ${action.payload.user.name} &#129303;`
      );
    },
    [logIn.rejected](state) {
      state.loading = false;
      Report.warning(
        'Warning',
        `Something went wrong or there is no such user!`,
        'Okay'
      );
    },
    [logOut.pending](state) {
      state.loading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
      Notify.info('See you again &#128521;');
    },
    [logOut.rejected](state) {
      state.loading = false;
      Report.warning('Warning', `Something went wrong!`, 'Okay');
    },
    [getUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

const statusPending = (state, action) => {
  state.isLoading = true;
  state.actionTypeStatus = action.type;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.actionTypeStatus = false;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    actionTypeStatus: null,
  },
  extraReducers: {
    [fetchContacts.pending]: statusPending,
    [fetchContacts.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.error = null;
      store.items = action.payload;
      store.actionTypeStatus = false;
    },
    [fetchContacts.rejected]: statusRejected,
    [addContact.pending]: statusPending,
    [addContact.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.error = null;
      store.items.push(action.payload);
      store.actionTypeStatus = false;
      Notify.success('Contact successfully added!');
    },
    [addContact.rejected]: statusRejected,
    [deleteContact.pending]: statusPending,
    [deleteContact.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.error = null;
      store.items = store.items.filter(item => item.id !== action.payload.id);
      store.actionTypeStatus = false;
      Notify.failure('Contact successfully deleted!');
    },
    [deleteContact.rejected]: statusRejected,
  },
});

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const phoneBookReducer = phonebookSlice.reducer;
export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const authReducer = authSlice.reducer;

export const actions = phonebookSlice.actions;
