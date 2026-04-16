import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPizza, TSearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<TPizza[], TSearchPizzaParams>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<TPizza[]>(
      `https://69e16325b1cb62b9f316d429.mockapi.io/items/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);
