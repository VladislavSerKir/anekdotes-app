import picture from '../../images/picture.png'

export const HeaderSearch = () => {
    return (
        <header className={`header`}>
            <img className={`header__logo`} src={picture} alt='Природа'></img>
            <h1 className={`header__title ui text`}>Поиск по содержимому</h1>
            <div className={`header__search ui fluid category search`}>
                <div className={`header__inner ui icon input`}>
                    <input className={`header__input prompt`} type="text" placeholder="Поиск" />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
            <div className={`header__button`}>
                <button className={`header__button ui yellow basic button`}>Сбросить поиск</button>
            </div>
        </header>
    )
}