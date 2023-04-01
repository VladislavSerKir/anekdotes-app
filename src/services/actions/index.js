import axios from 'axios';
import { shuffle } from '../../utils/utils';
import { filterAnekdotesToSearch, setAnekdotes } from '../dataReducer/dataReducer';

export const anekdotes = axios.create({
    baseURL: 'http://localhost:3001'
});

export const searchTerm = (search) => async (dispatch) => {
    const response = await anekdotes.get("/anekdotes");

    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
    dispatch(filterAnekdotesToSearch(search))
};

export const fetchFilteredAnekdotes = (category, search) => async (dispatch) => {
    const response = await anekdotes.get(`/anekdotes?section=${category}`);

    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
    dispatch(filterAnekdotesToSearch(search))
};

export const fetchSectionAnekdote = (section) => async (dispatch) => {
    const response = await anekdotes.get(`/anekdotes?section=${section}`);

    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
};

export const filterAndSearch = (filter, search) => (dispatch) => {
    filter.forEach(category => {
        dispatch(fetchFilteredAnekdotes(category, search))
    })
}