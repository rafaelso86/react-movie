import React from 'react';

import Header from '../../componentes/Header';
import Menu from "../../componentes/Menu";

function Series() {

    return (
      <React.Fragment>
        <Header
          title="React Movies"
          description="Página Séries React Movies"
          canonical="/"
        />
            
        <Menu />
        
        <div id="container">
          <h1>Séries</h1>
        </div>
      </React.Fragment>
    );
}

export default Series;