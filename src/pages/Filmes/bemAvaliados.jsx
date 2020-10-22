import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

import dateFormat from 'dateformat';

import { helperDataFormat } from '../../helpers/HelperDataFormat';

export default class FilmesBemAvaliados extends React.Component {

    state = {
        items: [],
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR&page=1')
            .then(res => {
                const items = res.data.results;
                this.setState({ items });
                console.log(items);
        })
    }

    render() {

        helperDataFormat();

        return (
            <React.Fragment>
                <Header
                    title="Filmes bem avaliados | React Movies"
                    description="Filmes bem avaliados em React Movies"
                    canonical="/filmes/bem-avaliados"
                />
            
                <Menu />
        
                <div id="container">
                    <h1>Filmes bem avaliados</h1>

                    <div className="card-group">
                        {this.state.items.map(filme => <div className="cards">
                            <div className="card-body">
                                <Link to={'/filme/' + filme.id}>
                                    <img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} title={filme.title} alt={filme.poster_path}/>
                                    <h3>{filme.title}</h3>
                                    <div className="release_date">{dateFormat(filme.release_date, 'd mmmm, yyyy')}</div>
                                    <div className="vote">{filme.vote_average}</div>
                                </Link>
                            </div>
                        </div>)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}