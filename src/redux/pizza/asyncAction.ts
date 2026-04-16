import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPizza, TSearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<TPizza[], TSearchPizzaParams>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<TPizza[]>(
      `https://dummyjson.com/c/5097-6e37-452b-87b6?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);
