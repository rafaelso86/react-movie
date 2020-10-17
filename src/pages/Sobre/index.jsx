import React from "react";

import Header from "../../componentes/Header";
import Menu from "../../componentes/Menu";

function Sobre() {
  return (
    <React.Fragment>
      <Header
        title="Sobre | React Movies"
        description="Página sobre React Movies"
        canonical="/sobre"
      />

      <Menu />
      
      <div id="container">
        <h1>Sobre</h1>
      </div>
    </React.Fragment>
  );
}

export default Sobre;
