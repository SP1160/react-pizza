import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPizza, TSearchPizzaParams } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<TPizza[], TSearchPizzaParams>(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get<TPizza[]>(
            `https://64a1e9640079ce56e2db7a33.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
        );
        return data;
    },
);
