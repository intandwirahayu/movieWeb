import { Link } from 'react-router-dom';
import '../css/tvItem.scss';

const TVItem = (props) => {
    return(
        <section className="tvItem">
            <figure>
                <img src={props.nameImg} alt="no img news"/>
            </figure>

            <h3>{props.nameItem}</h3>
            <p>{props.desc}</p>

            <footer>
                <Link to={`/detailTV/${props.idItem}`} id="linkTvItem">Read More</Link>
            </footer>
        </section>
    )
}

export default TVItem;