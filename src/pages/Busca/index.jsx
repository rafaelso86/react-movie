import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

import MenuBusca from './componentes/MenuBusca';

export default class Busca extends React.Component{

    state = {
        items: [],
        total: []
    }

    componentDidMount() {

        let urlBusca = window.location.href;
        let splitUrl = urlBusca.split('/');
        let splitQuery = splitUrl[3].split('=');
        let queryUrl = splitQuery[1];

        if (queryUrl === 'null') {
            document.querySelector('.mensagem-erro').innerHTML = '<p>Nenhum dado encontrado</p>';
        }

        else {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&query=' + queryUrl)
                .then(res => {
                    const items = res.data;
                    const total = res.data;

                    if (items.total_results === 0) {
                        document.querySelector('.mensagem-erro').innerHTML = '<p>Nenhum dado encontrado</p>';
                    }
                    else {
                        this.setState({ items: items.results });
                        this.setState({ total: total });
                    }
                })
        }
    }

    render() {
        console.log(this.state.items);
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
                                    <Link to={'/filme/' + item.id}>
                                        <img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} title={item.title} alt={item.poster_path}/>
                                        <h3>{item.title}</h3>
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