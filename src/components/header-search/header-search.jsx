import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import picture from '../../images/picture.png'
import { setIsLoading, setResetSearch, setSearch, setTerm } from '../../services/dataReducer/dataReducer'

export const HeaderSearch = () => {

    const term = useSelector(store => store.data.term);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true))
        const timer = setTimeout(() => {
            if (term) {
                dispatch(setSearch(term))
            }
            dispatch(setIsLoading(false))
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [term])

    return (
        <header className={`header`}>
            <img className={`header__logo`} src={picture} alt='Природа'></img>
            <h1 className={`header__title ui text`}>Поиск по содержимому</h1>
            <div className={`header__search ui fluid category search`}>
                <div className={`header__inner ui icon input`}>
                    <input
                        className={`header__input prompt`}
                        name="search" type="text"
                        placeholder="Поиск"
                        value={term}
                        onChange={(e) => dispatch(setTerm(e.target.value))}
                    />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
            <div className={`header__button`}>
                <button
                    className={`header__button ui yellow basic button`}
                    onClick={() => dispatch(setResetSearch())}
                >Сбросить поиск</button>
            </div>
        </header>
    )
}