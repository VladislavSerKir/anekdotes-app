import { createSlice } from '@reduxjs/toolkit';

const dataState = {
    term: '',
    search: '',
    filter: [],
    anekdotes: [],
    isLoading: false
};

export const dataSlice = createSlice({
    name: 'data',
    initialState: dataState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setTerm: (state, action) => {
            state.term = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setResetSearch: (state, action) => {
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
        },
        setAnekdote: (state, action) => {
            state.anekdotes = [...state.anekdotes, action.payload]
        },
        setResetAnekdotes: (state, action) => {
            state.anekdotes = []
        },
        filterAnekdotesToSearch: (state, action) => {
            state.anekdotes = [...state.anekdotes].filter(anekdote => {
                return anekdote.content.includes(action.payload)
            })
        }
    },
})

export const { setIsLoading, setTerm, setSearch, setResetSearch, setFilter, setResetFilter, setResetCategory, setAnekdotes, setResetAnekdotes, filterAnekdotesToSearch, setAnekdote } = dataSlice.actions
export const dataReducer = dataSlice.reducer