import { useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";
import { fetchSectionAnekdote, filterAndSearch, searchTerm } from "../../services/actions";
import { setCurrentAnekdotes, setResetAnekdotes } from "../../services/dataReducer/dataReducer";
import { useTypedDispatch, useTypedSelector } from "../../types/types";
import { Pagination } from "../pagination/pagination";
import { Spinner } from "../spinner/spinner";

export const ResultSection = () => {

    const anekdotes = useTypedSelector(store => store.data.anekdotes);
    const search = useTypedSelector(store => store.data.search);
    const filter = useTypedSelector(store => store.data.filter);
    const isLoading = useTypedSelector(store => store.data.isLoading)
    const dispatch = useTypedDispatch()
    const currentAnekdotes = useTypedSelector(store => store.data.currentAnekdotes)
    const theme = useTypedSelector(store => store.data.theme)

    const { maxPage, currentPage, findCurrentAnekdotes } = usePagination(anekdotes, 5);

    useEffect(() => {
        dispatch(setCurrentAnekdotes(findCurrentAnekdotes()))
    }, [maxPage, currentPage, search, filter])

    useEffect(() => {
        dispatch(setResetAnekdotes())
        if (filter.length && !search) {
            filter.forEach(category => {
                dispatch(fetchSectionAnekdote(category))
            })
        } else if (filter.length && search) {
            dispatch(filterAndSearch(filter, search))
        } else if (!filter.length && search) {
            dispatch(searchTerm(search))
        }

    }, [search, filter])

    return (
        <div className={`result-section`}>
            {
                anekdotes.length ? (
                    <h2 className={`result-section__title`}>Вот что нашлось:</h2>
                ) : <h2 className={`result-section__title`}>Ничего не найдено</h2>
            }

            {
                isLoading ? (
                    <Spinner />
                ) : null
            }

            {
                currentAnekdotes.map((anekdote, index) => {
                    return (
                        <div className={`result-section__item ui items`} key={index}>
                            <div className="item">
                                <a href="/" className="ui small image">
                                    <img
                                        className={`result-section__item-image`}
                                        src={require(`../../images/${anekdote.section}.jpeg`)}
                                        alt={anekdote.section}>
                                    </img >
                                </a>
                                <div className="content">
                                    <a href="/" className={`header`}>
                                        <p className={`result-section__item-title ${theme === 'dark' ? 'result-section__item-title_thyme_dark' : ''}`}>
                                            {`${index + 1} - ${anekdote.title}`}
                                        </p></a>
                                    <div className={`description ${theme === 'dark' ? 'description_thyme_dark' : ''}`}>
                                        <p>{anekdote.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {
                anekdotes.length > 5 ? (
                    <Pagination />
                ) : null
            }
        </div>
    )
}