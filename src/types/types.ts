import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { rootReducer } from "../services";

export type RootState = ReturnType<typeof rootReducer>

export const useTypedDispatch = () => useDispatch<AppThunkDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppThunkDispatch = ThunkDispatch<RootState, never, Action<string>>;

export type TAnekdote = {
    title: string,
    section: string,
    content: string,
    id: number
}

export type TEventTarget = {
    target: {
        checked: boolean
        name: string,
        value: string
    }
}