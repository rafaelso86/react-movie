import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

//import dateFormat from 'dateformat';
import { helperDataFormat } from '../../helpers/HelperDataFormat';

import Helmet from 'react-helmet';
import Menu from "../../componentes/Menu";

import nullImage from '../../imagens/sem-imagem.png';

function Series() {

    const { id } = useParams();

    const [lista, setLista] = useState([]);
    const [titlePage, setTitlePage] = useState();
    const [descriptionPage, setDescriptionPage] = useState();

    useEffect(() => {
        const listaSeries = async () => {
            await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR&page=1`)
                .then(res => {
                    const items = res.data.results;
                    setLista(items);
                    console.log(items);
                })
        }

        const seo = async () => {
            switch (id) {
                case 'popular':
                    setTitlePage('Séries mais populares');
                    setDescriptionPage('Séries mais populares da semana.');
                    break;

                case 'airing_today':
                    setTitlePage('Em exibição hoje');
                    setDescriptionPage('Séries sendo exibidas no momento.');
                    break;

                case 'on_the_air':
                    setTitlePage('Na TV');
                    setDescriptionPage('Séries exibidas na TV.');
                    break;

                case 'top_rated':
                    setTitlePage('Séries mais bem avaliados');
                    setDescriptionPage('Séries mais bem avaliados pela crítica.');
                    break;

                default:
                // code block
            }
        }

        seo();
        listaSeries();
        helperDataFormat();
    }, [id])


    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{titlePage + ' | React Movies'}</title>
                <link rel="canonical" href={'filmes/' + id} />
                <meta name="description" content={descriptionPage} />
            </Helmet>

            <Menu />

            <div id="container">
                <h1 className="card-title">{titlePage}</h1>

                <div className="card-group">
                    {lista.map(serie => <div className="cards">
                        <div className="card-body">
                            <Link to={'/serie/' + serie.id}>
                                <img
                                    src={serie.poster_path === null ? nullImage : 'https://image.tmdb.org/t/p/w500/' + serie.poster_path}
                                    title={serie.name}
                                    alt={serie.poster_path} />

                                <div className="info-list">
                                    <h3>{serie.name}</h3>
                                    <div className="release_date">{serie.release_date}</div>
                                    <div className="vote">{serie.vote_average}</div>
                                </div>
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Series;