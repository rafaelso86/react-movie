import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './index.scss';


function Menu() {
  return (
      <div id="menu-topo">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <Link to='/'>React Movie</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Filmes" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/filmes/populares" title="populares">Populares</Link></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/filmes/em-cartaz" title="Em cartaz">Em cartaz</Link></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/filmes/proximas-estreias" title="Próximas estréias">Próximas estréias</Link></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/filmes/bem-avaliados" title="Mais bem avaliados">Mais bem avaliados</Link></NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Séries" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/series/populares" title="Populares">Populares</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/series/em-exibicao" title="Em exibição hoje">Em exibição hoje</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/series/na-tv" title="Na TV">Na TV</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/series/mais-avaliadas" title="Mais bem avaliados">Mais bem avaliadas</Link>
                  </NavDropdown.Item>
                </NavDropdown>
            
              {/*<Nav>
                <Link to='/sobre'>Atores</Link>
              </Nav>*/}
            </Nav>
            <Nav>
              {/*<Nav>
                <Link to='/sobre'>Sobre</Link>
              </Nav>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default Menu;
