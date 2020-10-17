import React from 'react';

import axios from 'axios';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

export default class Conteudo extends React.Component{

    state = {
        items: [],
    }

    urlParams() {
        console.log('Pega url');

        let getUrl = window.location.href;
        let splitUrl = getUrl.split('/');
        let idMovie = splitUrl[4];

        return idMovie;
    }

    componentDidMount() {

        axios.get('https://api.themoviedb.org/3/movie/' + this.urlParams() + '?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR')
            .then(res => {
                const items = res.data;
                this.setState({ items });
                console.log(items);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    title={this.state.items.title + ' | React Movies'} 
                    description={this.state.items.overview}
                    canonical={'filmes/' + this.state.items.id}
                />
            
                <Menu />
        
                <div id="container">
                    <h1>{this.state.items.title}</h1>
                    <p>{this.state.items.overview}</p>
                    <img src={'https://image.tmdb.org/t/p/original/' + this.state.items.backdrop_path} alt={this.state.items.backdrop_path} style={{ width: '100%' }}/>

                </div>
            </React.Fragment>
        )
    }
}