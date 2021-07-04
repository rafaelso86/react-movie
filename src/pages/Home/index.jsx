import React from 'react';

import './index.scss';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";
import Busca from '../../componentes/Busca';

import FilmesPopulares from './componentes/FilmesPopulares';
import SeriesPopulares from './componentes/SeriesPopulares';
//import Trailers from './componentes/Trailers';

function Home() {

  return (
    <React.Fragment>
      <Header
        title="React Movies"
        description="Página inicial React Movies"
        canonical="/"
      />

      <Menu />

      <div id="container">
        <Busca />
        <FilmesPopulares />
        <SeriesPopulares />
      </div>
    </React.Fragment>
  );
}

export default Home;