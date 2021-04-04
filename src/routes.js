import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home';

//Filmes
import FilmesLista from './pages/Filmes';
/*import FilmesPopulares from './pages/Filmes/populares';
import FilmesEmCartaz from './pages/Filmes/emCartaz';
import FilmesEstreias from './pages/Filmes/estreias';
import FilmesBemAvaliados from './pages/Filmes/bemAvaliados';*/
import ConteudoFilmes from './pages/Filmes/conteudo';

//Séries
//import Series from './pages/Series';
import SeriesPopulares from './pages/Series/populares';
import SeriesBemAvaliadas from './pages/Series/bemAvaliados';
import SeriesNaTv from './pages/Series/naTv';
import SeriesEmExibicao from './pages/Series/emExibicao';
import ConteudoSerie from './pages/Series/conteudo';

import Busca from './pages/Busca';
import BuscaMovie from './pages/Busca/buscaMovie';
import BuscaTv from './pages/Busca/buscaTv';

import Sobre from './pages/Sobre';

export default function Routes() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact>
                    <Home />
                </Route>

                <Route path="/filmes/:id" component={FilmesLista}>
                    <FilmesLista />
                </Route>

                {/*<Route path="/filmes/populares" component={FilmesPopulares }>
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
                </Route>*/}
                <Route path="/filme/:id" component={ConteudoFilmes}>
                    <ConteudoFilmes />
                </Route>

                <Route path="/series/populares" component={SeriesPopulares}>
                    <SeriesPopulares />
                </Route>
                <Route path="/series/mais-avaliadas" component={SeriesBemAvaliadas}>
                    <SeriesBemAvaliadas />
                </Route>
                <Route path="/series/em-exibicao" component={SeriesEmExibicao}>
                    <SeriesEmExibicao />
                </Route>
                <Route path="/series/na-tv" component={SeriesNaTv}>
                    <SeriesNaTv />
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
    )
}