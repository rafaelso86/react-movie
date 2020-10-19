import React from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

export default class MenuBusca extends React.Component{

    state = {
        itemsMovie: [],
        totalMovie: [],
        itemsTv: [],
        totalTv: [],
        querySearch: []
    }

    componentDidMount() {

        let urlBusca = window.location.href;
        let splitUrl = urlBusca.split('/');
        let splitQuery = splitUrl[3].split('=');
        let queryUrl = splitQuery[1];

        //Estado para a query de busca
        this.setState({ querySearch: queryUrl });

        //Retorna a quantidade de Filmes na busca
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&query=' + queryUrl)
                .then(res => {
                    const totalMovie = res.data;

                    this.setState({ totalMovie: totalMovie });
                })
        
        // Retorna a quantidade de Séries na busca
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&query=' + queryUrl)
                .then(res => {
                    const totalTv = res.data;
                    
                    this.setState({ totalTv: totalTv });
                })
    }

    render() {
        return (
            <div className="menu-busca">
                <ul>
                    <li><Link to={'/busca/movie?query=' + this.state.querySearch} id="movie">Filmes {this.state.totalMovie.total_results}</Link></li>
                    <li><Link to={'/busca/tv?query=' + this.state.querySearch} id="tv">Séries {this.state.totalTv.total_results}</Link></li>
                </ul>
            </div>
        )
    }
}