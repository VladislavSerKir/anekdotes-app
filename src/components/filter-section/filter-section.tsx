import { useDispatch } from "react-redux";
import { setFilter, setResetCategory, setResetFilter } from "../../services/dataReducer/dataReducer";

export const FilterSection = () => {

    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
        if (event.target.checked) {
            dispatch(setFilter(event.target.name))
        } else {
            dispatch(setResetCategory(event.target.name))
        }
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {

        const checkboxes: Array<HTMLFormElement> = (Array.from(event.target.elements) as Array<HTMLFormElement>).filter((element: HTMLFormElement) => element.type === 'checkbox')

        checkboxes.forEach((value: HTMLFormElement): boolean => value.checked = false)
        event.preventDefault()
        dispatch(setResetFilter())
    }

    return (
        <div className={`filter-section`}>
            <h2 className={`filter-section__title`}>Поиск по категориям</h2>
            <form className={`filter-section__form ui form`} onChange={handleChange} onSubmit={handleSubmit}>
                <div className={`filter-section__form-line filter-section__form-line_type_start`} />
                <div className={`filter-section__form-content`}>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="students" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>Про студентов</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="work" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О работе и начальниках</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="doctor" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О врачах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="man" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О мужчинах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="woman" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О женщинах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="kids" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О детях</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="wedding" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О свадьбах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="observations" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_start`}>О любопытных наблюдениях</p></label>
                    </div>
                </div>

                <h3 className={`filter-section__text`}>О национальностях</h3>
                <div className={`filter-section__form-line filter-section__form-line_type_middle`} />
                <div className={`filter-section__form-content`}>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="russians" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О русских</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="french" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О французах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="english" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О англичанах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="jews" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О евреях</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="italian" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О итальянцах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="poles" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О поляках</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="georgians" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О грузинах</p></label>
                    </div>
                    <div className={`filter-section__form-item ui checkbox`}>
                        <input type="checkbox" name="scots" />
                        <label ><p className={`filter-section__form-label filter-section__form-label_type_middle`}>О шотландцах</p></label>
                    </div>
                </div>
                <div className={`filter-section__form-line filter-section__form-line_type_end`} />
                <div className={`filter-section__form-reset`}>
                    <button
                        className={`filter-section__form-reset ui purple basic button`}
                        type='submit'
                    >Сбросить категории</button>
                </div>
            </form>
        </div>
    )
}