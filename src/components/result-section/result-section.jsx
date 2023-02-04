import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import students from "../../images/students.jpeg";
import { fetchAnekdotes, fetchSectionAnekdote, filterAnekdotes } from "../../services/actions";
import { setResetAnekdotes } from "../../services/dataReducer/dataReducer";
import { Spinner } from "../spinner/spinner";

export const ResultSection = () => {

    const anekdotes = useSelector(store => store.data.anekdotes);
    const search = useSelector(store => store.data.search);
    const filter = useSelector(store => store.data.filter);
    const isLoading = useSelector(store => store.data.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setResetAnekdotes())
        if (filter.length && !search) {
            filter.map(category => {
                dispatch(fetchSectionAnekdote(category))
            })
        }
        else if (filter.length && search) {
            dispatch(filterAnekdotes(filter, search))
        } else if (!filter.length && search) {
            dispatch(fetchAnekdotes(search))
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
                anekdotes.map((anekdote, index) => {
                    return (
                        <div className={`result-section__item ui items`} key={index}>
                            <div className="item">
                                <a href="/" className="ui small image">
                                    <img className={`result-section__item-image`} src={students} alt={anekdote.section}></img >
                                </a>
                                <div className="content">
                                    <a href="/" className={`header`}>
                                        <p className={`result-section__item-title`}>
                                            {`${index + 1} - ${anekdote.title}`}
                                        </p></a>
                                    <div className="description">
                                        <p>{anekdote.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}