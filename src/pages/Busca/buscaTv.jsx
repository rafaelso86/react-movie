import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

import MenuBusca from './componentes/MenuBusca';

export default class BuscaTv extends React.Component{

    state = {
        items: [],
        total: [],
    }

    componentDidMount() {

        let urlBusca = window.location.href;
        let splitUrl = urlBusca.split('/');
        let splitQuery = splitUrl[4].split('=');
        let splitCategory = splitQuery[0].split('?');
        let queryCategory = splitCategory[0];
        let queryUrl = splitQuery[1];

        if (queryUrl === 'null') {
            document.querySelector('.mensagem-erro').innerHTML = '<p>Nenhum dado encontrado</p>';
        }

        else {
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&query=' + queryUrl)
                .then(res => {
                    const items = res.data.results;
                    const total = res.data;

                    console.log(items)

                    if (items.total_results === 0) {
                        document.querySelector('.mensagem-erro').innerHTML = '<p>Nenhum dado encontrado</p>';
                    }
                    else {
                        this.setState({ items: items });
                        this.setState({ total: total });

                        if (queryCategory === 'movie') {
                            console.log('Filme')
                        }
                        else {
                            console.log('Série');
                        }
                    }
                })
        }
    }

    render() {;
        return (
            <React.Fragment>
                <Header
                title="Resultado Busca | React Movies"
                description="Resultado Busca | React Movies"
                canonical="/"
                />
                    
                <Menu />
                
                <div id="container">
                    <h1>Busca | React Movie</h1>
                    
                    <MenuBusca/>

                    <div className="card">
                        <div className="mensagem-erro"></div>
                        
                        <div className="card-group">
                            {this.state.items.map(item => <div className="cards">
                                <div className="card-body">
                                    <Link to={'/serie/' + item.id}>
                                        <img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} title={item.name} alt={item.poster_path}/>
                                        <h3>{item.name}</h3>
                                        <div className="release_date">{item.release_date}</div>
                                        <div className="vote">{item.vote_average}</div>
                                    </Link>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}