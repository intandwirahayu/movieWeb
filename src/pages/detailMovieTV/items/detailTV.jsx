import { iconArrowBack, iconMap, iconNoLogo, iconRate } from "../../../assets/images";
import {useParams, useNavigate} from "react-router-dom";
import "../css/detailAll.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailTV = () => {
    const params = useParams();
    const [regularData, setRegularData] = useState([]);
    const [gendres, setGendres] = useState([]);
    const [productionCountry, setproductionCountry] = useState([]);
    const [productionCompanies, setProductionCompanies] = useState([]);
    const [createdBy, setCreatedBy] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let componentMounted = true;

        if(componentMounted){
            getDetailTV(params.id);
        }
        
        return () => {
            componentMounted = false;
        }
    }, [])

    const getDetailTV = async (idMovie) => {
        await axios.get(`https://api.themoviedb.org/3/tv/${idMovie}?api_key=03070b42879aa8c8284f975066a90c0e&language=en-US`)
        .then((result) => {
            setRegularData(result.data);
            setGendres(result.data.genres);
            setproductionCountry(result.data.production_countries);
            setProductionCompanies(result.data.production_companies);
            setCreatedBy(result.data.created_by);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <article id="detailMovie">
            <article id="contentHeaderMovie">
                <header>
                    <img src={iconArrowBack} onClick={() => navigate(-1)} id="arrowBack"/>
                    <h3>Detail TV</h3>
                </header>

                <figure>
                    <img src={`https://www.themoviedb.org/t/p/original/${regularData.backdrop_path}`}/>
                </figure>
            </article>
            
            <article id="contentMovie">
                <figure>
                    <img src={`https://www.themoviedb.org/t/p/original/${regularData.poster_path}`}/>
                </figure>

                <article>
                    <h3>{regularData.name}</h3>

                    <div id="rate-map">
                        <div>
                            <img src={iconRate} />
                            <p>{regularData.vote_average}</p>
                        </div>

                        <div>
                            <img src={iconMap} />
                            {
                                productionCountry.map((item, index) => {
                                    return(
                                        <p key={index}>{item.name}, </p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <article id="gendre">
                        {
                            gendres.map((item, index) => {
                                return(
                                    <p key={index}>{item.name}</p>
                                )
                            })
                        }
                    </article>

                    <article id="primary-data">
                        <p>First Air Date : {regularData.first_air_date}</p>
                        <p>Last Air Date : {regularData.last_air_date}</p>
                        <p>Popularity : {regularData.popularity}</p>
                        <p>Vote Count : {regularData.vote_count}</p>
                        <p>Status : {regularData.status}</p>
                    </article>

                    <article>
                        <section className="more-data">
                            <h3>Created By</h3>

                            <div className="nameCreated">
                                {
                                    createdBy.map((item, index) => {
                                        return(
                                            <p key={index} className="pname">{item.name},</p>
                                        )
                                    })
                                }   
                            </div>
                        </section>

                        <section className="more-data">
                            <h3>Overview</h3>
                            <p>{regularData.overview}</p>
                        </section>

                        <section className="more-data">
                            <h3>Production Companies</h3>

                            <article>
                                {
                                    productionCompanies.map((item, index) => {
                                        return(
                                            <div className="companies" key={index}>
                                                <figure>
                                                    <img src={
                                                                item.logo_path == null ?
                                                                    iconNoLogo
                                                                :
                                                                    `https://www.themoviedb.org/t/p/original/${item.logo_path}`
                                                             } width="100px" height="50px"
                                                    />
                                                </figure>
                                                
                                                <div>
                                                    <p>Name : {item.name}</p>
                                                    <p>Origin Country : {item.origin_country.length == 0 ? "No Country" : item.origin_country}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </article>
                        </section>
                    </article>

                    <div id="homepage">
                        <a href={regularData.homepage} target="_blank" id="btnHomepage">Go To Homepage Movie</a>
                    </div>
                </article>
            </article>
        </article>
    );
};

export default DetailTV;
