import '../css/collectionsItemPrimary.scss';
import { iconArrowRightWhite } from '../../assets/images';
import { Link } from 'react-router-dom';

const CollectionsItemPrimary = (props) => {
    return(
        <section className="item-collection-primary">
            <figure>
                <img src={props.nameImage} alt="no-img"/>
            </figure>
                                
            <div className="detail-item-primary">
                <h3>{props.nameItem}</h3>
                <p>Rate : {props.countItem}</p>
                <Link to={`/detailMovie/${props.idItem}`} className="link">Read More <span><img src={iconArrowRightWhite}/></span></Link>
            </div>
        </section>
    )
}

export default CollectionsItemPrimary;