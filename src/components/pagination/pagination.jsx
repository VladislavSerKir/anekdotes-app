import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "../../hooks/usePagination";
import { setCurrentAnekdotes } from "../../services/dataReducer/dataReducer";

export const Pagination = () => {

    const dispatch = useDispatch();
    const anekdotes = useSelector(store => store.data.anekdotes);

    const { next, prev, jump, maxPage, currentPage, currentAnekdotes } = usePagination(anekdotes, 5);

    useEffect(() => {
        dispatch(setCurrentAnekdotes(currentAnekdotes()))
    }, [currentPage])

    return (
        <div className={`pagination`}>
            <div className={`ui buttons`}>
                <button className="ui labeled icon button primary basic" onClick={prev}><i className="left chevron icon"></i> Назад </button>
                <button className="ui right labeled icon button negative basic" onClick={next}>Вперед <i className="right chevron icon"></i> </button>
            </div>
            <div className={`pagination__to ui left icon input transparent`}>
                <input type="number" placeholder="Перейти на страницу..." />
                <i className="arrow circle right icon"></i>
            </div>
            <p className={`pagination__pages`}>Страница: {currentPage} из {maxPage}</p>
        </div>
    )
}