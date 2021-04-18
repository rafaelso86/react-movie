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
                  <Link
                  to="/filmes/popular">Popular</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Link
                  to="/filmes/now_playing">Em cartaz</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Link
                  to="/filmes/upcoming">Próximas estréias</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Link
                  to="/filmes/top_rated">Mais bem avaliados</Link>
                </NavDropdown.Item>
              </NavDropdown>
            
                
              <NavDropdown title="Séries" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/series/popular">Populares</Link>
                </NavDropdown.Item>
              
                <NavDropdown.Item>
                  <Link to="/series/airing_today">Em exibição hoje</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Link to="/series/on_the_air">Na TV</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Link to="/series/top_rated">Mais bem avaliadas</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default Menu;