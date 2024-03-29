import { ChangeEvent, useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import { setCurrentAnekdotes } from "../../services/dataReducer/dataReducer";
import { useTypedDispatch, useTypedSelector } from "../../types/types";

export const Pagination = () => {

    const [page, setPage] = useState<number>(1)
    const dispatch = useTypedDispatch();
    const anekdotes = useTypedSelector(store => store.data.anekdotes);

    const { next, prev, jump, maxPage, currentPage, findCurrentAnekdotes } = usePagination(anekdotes, 5);

    useEffect(() => {
        dispatch(setCurrentAnekdotes(findCurrentAnekdotes()))
    }, [currentPage, maxPage])

    const onChangePageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPage(parseInt(e.target.value))
    }

    return (
        <div className={`pagination`}>
            <div className={`ui buttons`}>
                <button className="ui labeled icon button primary basic" onClick={prev}><i className="left chevron icon"></i> Назад </button>
                <button className="ui right labeled icon button negative basic" onClick={next}>Вперед <i className="right chevron icon"></i> </button>
            </div>

            <div className={`pagination__to ui left icon input transparent`}>
                <div className="ui action input">
                    <input
                        min={1}
                        max={maxPage}
                        type="number"
                        value={page}
                        placeholder="Перейти на страницу..."
                        onChange={(e) => onChangePageHandler(e)}
                    />
                    <button
                        className="ui icon button purple"
                        onClick={() => jump(page)}
                    >
                        <i className="arrow circle right icon"></i>
                    </button>
                </div>
            </div>
            <p className={`pagination__pages`}>Страница: {currentPage} из {maxPage}</p>
        </div>
    )
}