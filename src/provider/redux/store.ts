import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; // Ensure this is imported
import { memberApi } from "./query/member";
import { memberActApi } from "./query/memberActivity";


export const store = configureStore({
  reducer: {
    [memberApi.reducerPath]: memberApi.reducer,
    [memberActApi.reducerPath]: memberActApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(memberApi.middleware,memberActApi.middleware),
});

// Setup listeners for refetching data on focus or reconnect
setupListeners(store.dispatch);