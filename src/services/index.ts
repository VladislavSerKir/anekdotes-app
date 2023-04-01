import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './dataReducer/dataReducer';

export const rootReducer = combineReducers({
    data: dataReducer,
});

const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export default store;