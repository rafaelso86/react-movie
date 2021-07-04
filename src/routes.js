import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home';

//Filmes
import FilmesLista from './pages/Filmes';
import ConteudoFilmes from './pages/Filmes/conteudo';

//Séries
import SeriesLista from './pages/Series';
import ConteudoSerie from './pages/Series/conteudo';

import Busca from './pages/Busca';
import BuscaMovie from './pages/Busca/buscaMovie';
import BuscaTv from './pages/Busca/buscaTv';

import Sobre from './pages/Sobre';

import Footer from './componentes/Footer';

export default function Routes() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact>
                        <Home />
                    </Route>

                    <Route path="/filmes/:id" component={FilmesLista}>
                        <FilmesLista />
                    </Route>
                    <Route path="/filme/:id" component={ConteudoFilmes}>
                        <ConteudoFilmes />
                    </Route>

                    <Route path="/series/:id" component={SeriesLista}>
                        <SeriesLista />
                    </Route>
                    <Route path="/serie/:id" component={ConteudoSerie}>
                        <ConteudoSerie />
                    </Route>

                    <Route path="/sobre" component={Sobre}>
                        <Sobre />
                    </Route>

                    <Route path="/busca" exact component={Busca}>
                        <Busca />
                    </Route>
                    <Route path="/busca/movie" exact component={BuscaMovie}>
                        <BuscaMovie />
                    </Route>
                    <Route path="/busca/tv" exact component={BuscaTv}>
                        <BuscaTv />
                    </Route>
                </Switch>
            </Router>

            <Footer />
        </div>
    )
}