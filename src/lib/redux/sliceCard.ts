import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardItem, CardListState } from "../../types";
import { RootState } from './store';


const initialState: CardListState = {
  cards: []
};

export const cardListSlice = createSlice({
  name: "cardList",
  initialState,
  reducers:{
    setCards: (state, action:PayloadAction<CardItem[]>) => {
      state.cards = action.payload;
    }
  }
});

export const { setCards } = cardListSlice.actions;
export const selectCards = (state: RootState) => state.cardList.cards;

export default cardListSlice.reducer;