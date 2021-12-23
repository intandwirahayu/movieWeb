import { Fragment, useEffect, useState} from "react";
import '../../assets/fonts/index.css';
import './home.scss';
import './responsive.scss';
import {ContentItemHeader, CollectionsItemPrimary, CollectionsItem, ProductItem, TVItem, TopHeader, FooterMain} from '../../components';
import { iconInstagram, iconYoutube, imgProfil } from "../../assets/images";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [collectionItem, setCollectionItem] = useState([]);
    const [productItem, setProductItem] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [tvPopular, setTvPopular] = useState([]);
    const urlImage = "https://www.themoviedb.org/t/p/original";

    useEffect(() => {
        let componentMount = true;

        if(componentMount){
            getCollectionItem();
            getProductItem();
            getTopRated();
            getTvPopular();
        }
        
        return componentMount = false;
    },[])

    const getCollectionItem = () => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=03070b42879aa8c8284f975066a90c0e&language=en-US&page=1")
        .then((result) => {
            const data = result.data.results;
            setCollectionItem(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const getProductItem = () => {
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=03070b42879aa8c8284f975066a90c0e&language=en-US&page=1")
        .then((result) => {
            const data = result.data.results;
            setProductItem(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const getTopRated = () => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=03070b42879aa8c8284f975066a90c0e&language=en-US&page=1")
        .then((result) => {
            const data = result.data.results;
            setTopRated(data);
        })
    }

    const getTvPopular = () => {
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=03070b42879aa8c8284f975066a90c0e&language=en-US&page=1")
        .then((result) => {
            const data = result.data.results;
            setTvPopular(data);
        })
    }

    return(
        <Fragment>
            <header id="top">
                <TopHeader/>

                <div id="bottom-header">
                    <h1>MovieWeb.</h1>
                    <p>MovieWeb is a movie and TV database built to provide a wide variety of movie information around the world.</p>
                    <div id="button-explore">
                        <a href="#content">EXPLORE NOW</a>
                    </div>
                </div>
            </header>

            <main>
                <div id="content">
                    <article id="collections">
                        <ContentItemHeader 
                            title="Popular Movies" 
                            desc="available various kind of movie collections"
                        />

                        <article>
                            {
                                collectionItem.map((item, index) => {
                                    if(index == 1){
                                        return(
                                            <CollectionsItemPrimary 
                                                key={index}
                                                nameImage={urlImage + item.backdrop_path}
                                                nameItem={item.title.length > 30 ?
                                                    item.title.substr(0, 30) + " ..." : item.title
                                                }
                                                countItem={item.vote_average}
                                                idItem={item.id}
                                            />
                                        )
                                    }
                                })
                            }

                            {
                                collectionItem.map((item, index) => {
                                    if(index > 11 && index < 16){
                                        return(
                                            <CollectionsItem
                                                key={index}
                                                nameItem={item.title.length > 20 ?
                                                    item.title.substr(0, 20) + " ..." : item.title
                                                }
                                                nameImage={urlImage + item.backdrop_path}
                                                countItem={item.vote_average}
                                                idItem={item.id}
                                            />
                                        )
                                    }
                                })
                            }
                            
                            {
                                collectionItem.map((item, index) => {
                                    if(index == 6){
                                        return(
                                            <CollectionsItemPrimary 
                                                key={index}
                                                nameImage={urlImage + item.backdrop_path}
                                                nameItem={item.title.length > 34 ?
                                                    item.title.substr(0, 34) + " ..." : item.title
                                                }
                                                countItem={item.vote_average}
                                                idItem={item.id}
                                            />
                                        )
                                    }
                                })
                            }
                        </article>
                    </article>

                    <article id="product">
                        <ContentItemHeader 
                            title="Upcoming Movies" 
                            desc="available various kind of upcoming collections"
                        />

                        <article>
                            {
                                productItem.map((item, index) => {
                                    if(index < 8){
                                        return(
                                            <ProductItem
                                                key={index}
                                                nameImage={urlImage + item.backdrop_path}
                                                contentNew={ 
                                                    item.vote_average > 7.5 ?
                                                    <div className="new">
                                                        <p>Trending</p>
                                                    </div>
                                                    : ""
                                                }
                                                nameItem={item.title.length > 30 ?
                                                    item.title.substr(0, 30) + " ..." : item.title
                                                }
                                                releaseItem={item.release_date}
                                                idItem={item.id}
                                            />
                                        )
                                    }
                                })
                            }
                        </article>

                        <footer>
                            <Link to="/Upcoming" id="linkUpcoming">GO TO MOVIES</Link>
                        </footer>
                    </article>

                    <article id="topRated">
                        <ContentItemHeader 
                            title="Top Rated Movies" 
                            desc="available various kind of top rated movies"
                        />

                        <article>
                            {
                                topRated.map((item, index) => {
                                    if(index === 1){
                                        return(
                                            <article key={index}>
                                                <figure>
                                                    <img src={urlImage + item.backdrop_path}/>
                                                </figure>

                                                <article>
                                                    <p id="discount">{item.vote_average} TOP RATED</p>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.overview.length > 200 ?
                                                        item.overview.substr(0,200) + " ...." : item.overview
                                                    }</p>
                                                    <Link to={`/detailMovie/${item.id}`} id="linkTopRated">WATCH NOW</Link>
                                                </article>
                                            </article>
                                        )
                                    }
                                })
                            }
                        </article>
                    </article>

                    <article id="tvPopular">
                        <ContentItemHeader 
                            title="TV Popular" 
                            desc="available various kind of TV popular"
                        />

                        <article>
                            {
                                tvPopular.map((item, index) => {
                                    if(index < 3){
                                        return(
                                            <TVItem
                                                key={index}
                                                nameImg={urlImage + item.backdrop_path}
                                                nameItem={item.name.length > 30 ?
                                                    item.name.substr(0, 30) + " ..." : item.name
                                                }
                                                desc={item.overview.length > 150 ?
                                                    item.overview.substr(0,150) + " ...." : item.overview
                                                }
                                                idItem={item.id}
                                            />
                                        )
                                    }
                                })
                            }
                        </article>
                    </article>

                    <article id="advertisement">
                        <h2>Keep Update & Watch Movies</h2>
                        <p>Sign up free your account for our newsletter</p>
                        <form action="" method="POST">
                            <input type="text" name="" placeholder="enter your email address"/>
                            <button>SIGN UP</button>
                        </form>
                    </article>
                </div>

                <aside>
                    <article id="bio">
                        <header>
                            <h2>Special My Bio</h2>
                        </header>
            
                        <article>
                            <figure>
                                <img src={imgProfil}/>
                            </figure>
                            
                            <h3>Intan Dwi Rahayu</h3>
                            <p>Hi all.. My name is Intan.
                                <br/>I was born in Jakarta, February 20th 1999. 
                                <br/>I am a fresh graduate of computer science who is interested in front end and UI design</p>
            
                            <p>This landing page build with HTML, CSS, Sass, JavaScript, React JS Hooks, React Router and Axios. visit my social media to see my other work</p>
                            <ul>
                                <li><a href="https://www.instagram.com/indwra/" target="_blank"><img src={iconInstagram}/><span>indwra</span></a></li>
                                <li><a href="https://www.youtube.com/watch?v=usrQAqMXaIo" target="_blank"><img src={iconYoutube}/><span>Intan Dwi Rahayu</span></a></li>
                            </ul>
                        </article>
                    </article>
                </aside>
            </main>

            <FooterMain/>
        </Fragment>
    )
}

export default Home;