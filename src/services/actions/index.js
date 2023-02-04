import axios from 'axios';
import { shuffle } from '../../utils/utils';
import { filterAnekdotesToSearch, setAnekdote, setAnekdotes } from '../dataReducer/dataReducer';

export const anekdotes = axios.create({
    baseURL: 'http://localhost:3001'
});

export const fetchAnekdotes = (search) => async (dispatch) => {
    const response = await anekdotes.get("/anekdotes");
    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
    dispatch(filterAnekdotesToSearch(search))
};

export const fetchFilteredAnekdotes = (section, search) => async (dispatch) => {
    const response = await anekdotes.get(`/anekdotes?section=${section}`);
    const shuffledAnekdotes = shuffle(response.data)
    shuffledAnekdotes.map(anekdote => {
        if (anekdote.content.includes(search)) {
            dispatch(setAnekdote(anekdote));
        }
    })
};

export const fetchSectionAnekdote = (section) => async (dispatch) => {
    const response = await anekdotes.get(`/anekdotes?section=${section}`);
    const shuffledAnekdotes = shuffle(response.data)
    dispatch(setAnekdotes(shuffledAnekdotes));
};

export const filterAnekdotes = (filter, search) => (dispatch) => {
    filter.forEach(category => {
        dispatch(fetchFilteredAnekdotes(category, search))
    })
}