import '../css/collectionsItem.scss';
import { iconArrowRight } from "../../assets/images";
import { Link } from 'react-router-dom';

const CollectionsItem = (props) => {
    return(
        <section className="item-collection">
            <h3>{props.nameItem}</h3>

            <figure>
                <img src={props.nameImage}/>
            </figure>
            
            <Link to={`/detailMovie/${props.idItem}`} className="link">{props.countItem} Rate <span><img src={iconArrowRight}/></span></Link>
        </section>
    )
}

export default CollectionsItem;