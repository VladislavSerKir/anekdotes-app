import { anekdotes } from "../../api/db";
import students from "../../images/students.jpeg"

export const ResultSection = () => {
    return (
        <div className={`result-section`}>
            <h2 className={`result-section__title`}>Вот что нашлось:</h2>

            {
                anekdotes.map((anekdote, index) => {
                    return (
                        <div className={`result-section__item ui items`} key={index}>
                            <div className="item">
                                <a href="/" className="ui small image">
                                    <img className={`result-section__item-image`} src={students} alt={anekdote.section}></img >
                                </a>
                                <div className="content">
                                    <a href="/" className="header">{`${index} - ${anekdote.title}`}</a>
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