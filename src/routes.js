import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home';

//Filmes
//import FilmesLista from './pages/Filmes';
import FilmesPopulares from './pages/Filmes/populares';
import FilmesEmCartaz from './pages/Filmes/emCartaz';
import FilmesEstreias from './pages/Filmes/estreias';
import FilmesBemAvaliados from './pages/Filmes/bemAvaliados';
import ConteudoFilmes from './pages/Filmes/conteudo';

import Series from './pages/Series';
import Busca from './pages/Busca';
import Sobre from './pages/Sobre';


export default function Routes() {    

    return (
        <Router>
            <Switch>
                <Route path="/" component={ Home } exact>
                    <Home />
                </Route>

                {/*<Route path="/filmes/:id" component={FilmesLista}>
                    <FilmesLista/>
                </Route>*/}
                <Route path="/filmes/populares" component={FilmesPopulares }>
                    <FilmesPopulares />
                </Route>
                <Route path="/filmes/em-cartaz" component={FilmesEmCartaz}>
                    <FilmesEmCartaz />
                </Route>
                <Route path="/filmes/proximas-estreias" component={FilmesEstreias}>
                    <FilmesEstreias />
                </Route>
                <Route path="/filmes/bem-avaliados" component={FilmesBemAvaliados}>
                    <FilmesBemAvaliados />
                </Route>
                <Route path="/filme/:id" component={ConteudoFilmes}>
                    <ConteudoFilmes />
                </Route>

                <Route path="/series" component={ Series }>
                    <Series />
                </Route>

                <Route path="/sobre" component={ Sobre }>
                    <Sobre />
                </Route>

                <Route path="/busca/:value" component={ Busca }>
                    <Busca />
                </Route>
            </Switch>
        </Router>
    )
}