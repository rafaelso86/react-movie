import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import dateFormat from 'dateformat';
import { helperDataFormat } from '../../helpers/HelperDataFormat';

import Helmet from 'react-helmet';
import Menu from "../../componentes/Menu";

import './index.scss';

export default function FilmeLista(props) {
    const { id } = useParams();
    //console.log(id);

    //const [categoria, setCategoria] = useState(id);
    const [lista, setLista] = useState([]);
    const [titlePage, setTitlePage] = useState();
    const [descriptionPage, setDescriptionPage] = useState();

    useEffect(() => {
        const listaFilmes = async () => {
            await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR&page=1`)
                .then(res => {
                    const items = res.data.results;
                    setLista(items);
                    console.log(items);
                })
        }

        const seo = async () => {
            switch (id) {
                case 'popular':
                    setTitlePage('Filmes mais populares');
                    setDescriptionPage('Filmes mais populares da semana.');
                    break;

                case 'now_playing':
                    setTitlePage('Filmes em cartaz');
                    setDescriptionPage('Filmes em cartaz no momento.');
                    break;

                case 'upcoming':
                    setTitlePage('Próximas estréias');
                    setDescriptionPage('Próximas estréias nos cinemas.');
                    break;

                case 'top_rated':
                    setTitlePage('Filmes mais bem avaliados');
                    setDescriptionPage('Filmes mais bem avaliados pela crítica.');
                    break;

                default:
                // code block
            }
        }

        seo();
        listaFilmes();
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
                    {lista.map(filme => <div className="cards" key={filme.id}>
                        <div className="card-body">
                            <Link to={'/filme/' + filme.id}>
                                <img
                                    src={filme.poster_path === null ? filme.poster_path = "" : 'https://image.tmdb.org/t/p/w500/' + filme.poster_path}
                                    title={filme.title}
                                    alt={filme.poster_path} />

                                <div className="info-list">
                                    <h3>{filme.title}</h3>
                                    <div className="release_date">{dateFormat(filme.release_date, 'd mmmm, yyyy')}</div>
                                    <div className="vote">{filme.vote_average}</div>
                                </div>
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </React.Fragment>
    );
}
