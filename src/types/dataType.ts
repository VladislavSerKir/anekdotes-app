import { TAnekdote } from "./types";

export type TDataState = {
    theme: string,
    term: string,
    search: string,
    filter: Array<string>,
    anekdotes: Array<TAnekdote>,
    currentAnekdotes: Array<TAnekdote>,
    isLoading: boolean
};