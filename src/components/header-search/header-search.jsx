import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import picture from '../../images/picture.png'
import pictureDark from '../../images/picture-dark.png';
import { setIsLoading, setResetSearch, setSearch, setTerm, setTheme } from '../../services/dataReducer/dataReducer'

export const HeaderSearch = () => {

    const term = useSelector(store => store.data.term);
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.data.theme)

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

    const themeHandler = (e) => {
        if (e.target.checked) {
            dispatch(setTheme('dark'))
        } else {
            dispatch(setTheme('light'))
        }
    }

    return (
        <header className={`header`}>
            <div className={`header__theme-switcher`}>
                <div className="ui toggle checkbox">
                    <input
                        type="checkbox"
                        name="public"
                        onChange={themeHandler}
                    />
                    <label className={`${theme === 'dark' ? 'header__label-thyme_dark' : ''}`}>{`${theme === 'light' ? 'Переключиться на темную' : 'Переключиться на светлую'}`}</label>
                </div>
            </div>

            <img
                className={`header__logo`}
                src={theme === 'light' ? picture : pictureDark}
                alt='Природа'
            ></img>
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