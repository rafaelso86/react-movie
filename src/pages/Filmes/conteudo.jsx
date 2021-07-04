import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './index.scss';
import axios from 'axios';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";
import { div } from 'prelude-ls';

export default function Conteudo(props) {

    const { id } = useParams();
    console.log(id);

    const [items, setItems] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const retornaFilme = async () => {
            await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR')
                .then(res => {
                    const items = res.data;
                    //this.setState({ items });
                    setItems(items);
                    console.log(items);
                })
        }

        retornaFilme();
    }, [id])

    return (
        <React.Fragment>
            <Header
                title={items.title + ' | React Movies'}
                description={items.overview}
                canonical={'filmes/' + items.id}
            />

            <Menu />

            <div className="top-page">
                <div
                    style={{
                        backgroundImage: `url(${'https://image.tmdb.org/t/p/original/' + items.backdrop_path})`,
                        backgroundRepeat: 'no-repeat',
                        minHeight: "520px",
                        backgroundSize: "cover",
                        backgroundPosition: "left 0 top",
                    }}
                ></div>

                <div className="mask"></div>

                <div className="info-topo">
                    <div className="content">
                        <div className="poster-filme">
                            <img src={'https://image.tmdb.org/t/p/original/' + items.poster_path} alt={items.poster_path} />
                        </div>

                        <div className="info">
                            <h1>{items.title}</h1>

                            <div className="row">
                                <div className="info-r release-data">{items.release_date}</div>
                                <div className="info-r">-</div>
                                <div className="info-r category">Gênero</div>
                                <div className="info-r">-</div>
                                <div className="info-r movie-hour">Duração</div>
                            </div>

                            <div className="vote-average">
                                <p>Nota: {items.vote_average}</p>
                            </div>

                            <div className="description">
                                <h2>{items.overview}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="container">
                {/*<h1>{items.title}</h1>
                <p>{items.overview}</p>*/}


            </div>
        </React.Fragment >
    )
}