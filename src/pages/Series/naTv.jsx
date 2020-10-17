import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

export default class SeriesNaTv extends React.Component {

    state = {
        items: [],
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR&page=1')
            .then(res => {
                const items = res.data.results;
                this.setState({ items });
                console.log(items);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    title="Séries na TV | React Movies"
                    description="Séries na TV em React Movies"
                    canonical="/series/na-tv"
                />
            
                <Menu />
        
                <div id="container">
                    <h1>Séries na TV</h1>

                    <div className="card-group">
                        {this.state.items.map(serie => <div className="cards">
                            <div className="card-body">
                                <Link to={'/serie/' + serie.id}>
                                    <img src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} title={serie.name} alt={serie.poster_path}/>
                                    <h3>{serie.name}</h3>
                                    <div className="release_date">{serie.release_date}</div>
                                    <div className="vote">{serie.vote_average}</div>
                                </Link>
                            </div>
                        </div>)}
                     </div>
                </div>
            </React.Fragment>
        );
    }
}