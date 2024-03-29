import { createSlice } from '@reduxjs/toolkit';
import { TDataState } from '../../types/dataType';

const dataState: TDataState = {
    theme: 'light',
    term: '',
    search: '',
    filter: [],
    anekdotes: [],
    currentAnekdotes: [],
    isLoading: false
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: dataState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setTerm: (state, action) => {
            state.term = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setResetSearch: (state) => {
            state.search = ''
            state.term = ''
        },
        setFilter: (state, action) => {
            state.filter = [...state.filter, action.payload]
        },
        setResetFilter: (state) => {
            state.filter = []
        },
        setResetCategory: (state, action) => {
            state.filter = state.filter.filter(category => category !== action.payload)
        },
        setAnekdotes: (state, action) => {
            state.anekdotes = [...state.anekdotes, ...action.payload]
            state.currentAnekdotes = [...state.currentAnekdotes, ...action.payload]
        },
        setAnekdote: (state, action) => {
            state.anekdotes = [...state.anekdotes, action.payload]
        },
        setResetAnekdotes: (state) => {
            state.anekdotes = []
            state.currentAnekdotes = []
        },
        filterAnekdotesToSearch: (state, action) => {
            state.anekdotes = [...state.anekdotes].filter(anekdote => {
                return anekdote.content.includes(action.payload)
            })
            state.currentAnekdotes = [...state.anekdotes]
        },
        setCurrentAnekdotes: (state, action) => {
            state.currentAnekdotes = [...action.payload]
        }
    },
})

export const { setTheme, setIsLoading, setTerm, setSearch, setResetSearch, setFilter, setResetFilter, setResetCategory, setAnekdotes, setResetAnekdotes, filterAnekdotesToSearch, setAnekdote, setCurrentAnekdotes } = dataSlice.actions
export const dataReducer = dataSlice.reducer