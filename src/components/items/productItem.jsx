import "../css/productItem.scss";
import { iconArrowGoTo } from "../../assets/images";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return(
        <section className="productItem">
            <figure>
                <img src={props.nameImage}/>
                {props.contentNew}

                <div className="hover-shopping">
                    <Link to={`/detailMovie/${props.idItem}`}><img src={iconArrowGoTo}/></Link>
                </div>
            </figure>

            <h3>{props.nameItem}</h3>
            <p>{props.releaseItem}</p>
        </section>
    )
}

export default ProductItem;