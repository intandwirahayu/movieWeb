import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { ContentItemHeader, ProductItem, TopHeader } from "../../components";
import FooterMain from "../../components/items/footerMain";
import './index.scss';

const Upcoming = () => {
    const [productItem, setProductItem] = useState([]);
    const urlImage = "https://www.themoviedb.org/t/p/original";

    useEffect(() => {
        let componentMounted = true;

        if(componentMounted){
            getProduct();
        }   

        return componentMounted = false
    }, []);

    const getProduct = async () => {
        await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=03070b42879aa8c8284f975066a90c0e&language=en-US&page=1")
        .then((result) => {
            setProductItem(result.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <Fragment>
            <TopHeader/>
            
            <article id="upcoming"> 
                <ContentItemHeader 
                    title="Upcoming Movies" 
                    desc="available various kind of upcoming movies"
                />

                
                <article>
                    {productItem.map((item, index) => {
                        if(item.backdrop_path !== null){
                            return (
                                <ProductItem
                                    key={index}
                                    nameImage={urlImage + item.backdrop_path}
                                    contentNew={
                                    item.vote_average > 7.5 ? (
                                        <div className="new">
                                        <p>Trending</p>
                                        </div>
                                    ) : (
                                        ""
                                    )
                                    }
                                    nameItem={
                                    item.title.length > 30
                                        ? item.title.substr(0, 30) + " ..."
                                        : item.title
                                    }
                                    releaseItem={item.release_date}
                                    idItem={item.id}
                                />
                            );
                        }
                    })}
                </article>
            </article>

            <FooterMain/>
        </Fragment>
    );
};

export default Upcoming;
