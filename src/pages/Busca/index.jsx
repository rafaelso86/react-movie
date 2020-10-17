import React from 'react';

import axios from 'axios';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

export default class Busca extends React.Component{

    state = {
        items: [],
    }

    componentDidMount() {

        let urlBusca = window.location.href;
        console.log(urlBusca);

        let splitUrl = urlBusca.split('/');
        console.log(splitUrl[4])

        let queryUrl = splitUrl[4];

        if (queryUrl === 'null') {
            document.querySelector('.mensagem-erro').innerHTML = '<p>Nenhum dado encontrado</p>';
        }

        else {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&query=' + queryUrl)
                .then(res => {
                    const items = res.data;

                    if (items.total_results === 0) {
                        document.querySelector('.mensagem-erro').innerHTML = '<p>Nenhum dado encontrado</p>';
                    }
                    else {
                        this.setState({ items: items.results });
                    }

                    console.log(items)
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

                    <div className="card">
                        <div className="mensagem-erro"></div>
                        <ul>
                            {this.state.items.map(item => <li>{item.title}</li>)}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}