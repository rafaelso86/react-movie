//Filmes mais populares

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import dateFormat from 'dateformat';
import { helperDataFormat } from '../../../../helpers/HelperDataFormat';

export default class FilmesPopulares extends React.Component {

  state = {
    items: [],
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR&page=1')
      .then(res => {
        const items = res.data.results;
        this.setState({ items });

        console.log(items)

      })
  }

  render() {
    //Função para conversão dos valores de meses
    helperDataFormat();

    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    return (
      <React.Fragment>
        <div className="content carrousel-home">
          <h2 className="titulo-carrosel">Os filmes mais populares</h2>

          <Slider className="filmes-populares" {...settings}>
            {this.state.items.map(filme => <div className="area-carrosel" key={filme.id}>
              <Link to={'/filme/' + filme.id}>
                <div className="poster-carrosel">
                  <img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} title={filme.title} alt={filme.poster_path} />
                </div>

                <div class="info-carrosel">
                  <h3>{filme.title}</h3>
                  <div className="release_date">{dateFormat(filme.release_date, 'd mmmm, yyyy')}</div>
                </div>
              </Link>
            </div>)}
          </Slider>
        </div>
      </React.Fragment>
    )
  }
}