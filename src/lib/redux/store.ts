import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from "./sliceCard";



export const store = configureStore({
  reducer: {
    cardList: cardListReducer
  },


});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;