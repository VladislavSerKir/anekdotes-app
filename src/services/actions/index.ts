import axios from 'axios';
import { AppThunkDispatch } from '../../types/types';
import { shuffle } from '../../utils/utils';
import { filterAnekdotesToSearch, setAnekdotes } from '../dataReducer/dataReducer';

export const anekdotes = axios.create({
    baseURL: 'http://localhost:3001'
});

export const searchTerm = (search: string) => async (dispatch: AppThunkDispatch) => {
    const response = await anekdotes.get("/anekdotes");

    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
    dispatch(filterAnekdotesToSearch(search))
};

export const fetchFilteredAnekdotes = (category: string, search: string) => async (dispatch: AppThunkDispatch) => {
    const response = await anekdotes.get(`/anekdotes?section=${category}`);

    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
    dispatch(filterAnekdotesToSearch(search))
};

export const fetchSectionAnekdote = (section: string) => async (dispatch: AppThunkDispatch) => {
    const response = await anekdotes.get(`/anekdotes?section=${section}`);

    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
};

export const filterAndSearch = (filter: Array<string>, search: string) => (dispatch: AppThunkDispatch) => {
    filter.forEach((category: string) => {
        dispatch(fetchFilteredAnekdotes(category, search))
    })
}