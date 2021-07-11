import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Slider from "react-slick";

import './index.scss';
import axios from 'axios';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

import nullImage from '../../imagens/sem-imagem.png';

export default function Conteudo(props) {

    const { id } = useParams();
    console.log(id);

    const [items, setItems] = useState([]);
    const [atores, setAtores] = useState([]);
    const [videos, setVieos] = useState([]);
    const [genero, setGenero] = useState([]);
    const [diretor, setDiretor] = useState([]);

    useEffect(() => {
        const retornaFilme = async () => {
            await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR')
                .then(res => {
                    const items = res.data;
                    setItems(items);
                    console.log(items);

                    //console.log(items.genres);
                    setGenero(items.genres);
                })
        }
        retornaFilme();

        const retornaAtores = async () => {
            await axios.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR')
                .then(res => {
                    const cast = res.data.cast;
                    setAtores(cast);
                    //console.log(cast);

                    const crew = res.data.crew;
                    console.log(crew);

                    let jobs = crew.filter((director) => {
                        return director.job === "Director";
                    })
                    setDiretor(jobs[0].name);
                })
        }
        retornaAtores();

        const retornaVideos = async () => {
            await axios.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR')
                .then(res => {
                    const video = res.data.results;
                    setVieos(video);
                    //console.log(video);
                })
        }
        retornaVideos();

    }, [id]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
                        backgroundImage: `url(${'https://image.tmdb.org/t/p/original' + items.backdrop_path})`,
                        backgroundRepeat: 'no-repeat',
                        minHeight: "520px",
                        backgroundSize: "cover",
                        backgroundPosition: "left 0 top",
                    }}
                    className="bg-header"
                ></div>

                <div className="mask"></div>

                <div className="info-topo">
                    <div className="content">
                        <div className="poster-filme">
                            <img src={'https://image.tmdb.org/t/p/original' + items.poster_path} alt={items.poster_path} title={items.title} />
                        </div>

                        <div className="info">
                            <h1>{items.title}</h1>

                            <div className="row">
                                <div className="info-r category">
                                    {genero.map(generos => <div className="tags-genres">{generos.name}</div>)}
                                </div>

                            </div>

                            <div className="vote-average">
                                <p>Duração: <strong>{items.runtime} min</strong></p>
                                <p>Nota: <strong>{items.vote_average}</strong></p>
                            </div>

                            <div className="description">
                                <h2>{items.overview}</h2>
                                <p>Diretor: <strong>{diretor}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="container">

                <div className="info-movie">
                </div>

                <div className="cast">
                    <h2>Elenco principal</h2>
                    <div className="cast-list">
                        <Slider {...settings}>
                            {atores.map(ator => <div className="row-cast" key={ator.id}>
                                <div className="content">
                                    <img
                                        src={ator.profile_path === null ? ator.profile_path = nullImage : 'https://image.tmdb.org/t/p/original' + ator.profile_path}
                                        alt={ator.profile_path}
                                        className="photo" title={ator.name} />

                                    <div className="info-cast">
                                        <div className="name">{ator.name}</div>
                                        <div className="character">{ator.character}</div>
                                    </div>
                                </div>
                            </div>)}
                        </Slider>
                    </div>
                </div>

                <div className="trailer">
                    <h2>Trailer</h2>
                    <div className="ttrailer-list">
                        {videos.map(trailer =>
                            <div key={trailer.id} className="youtube-player">
                                <iframe src={'https://www.youtube.com/embed/' + trailer.key} title={trailer.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}