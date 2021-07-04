//Séries mais populares

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import dateFormat from 'dateformat';
import { helperDataFormat } from '../../../../helpers/HelperDataFormat';

export default class SeriesPopulares extends React.Component {

  state = {
    items: []
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=c5ff834a7a048ff4e4c1e1610a68fb47&language=pt-BR&page=1')
      .then(res => {
        const items = res.data.results;
        this.setState({ items });
        console.log(items);
      })
  }

  render() {

    //Função para conversão dos valores de meses
    helperDataFormat();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <React.Fragment>
        <div className="content carrousel-home">
          <h2 className="titulo-carrosel">As séries mais populares</h2>

          <Slider {...settings}>
            {this.state.items.map(serie => <div className="area-carrosel" key={serie.id}>
              <Link to={'/serie/' + serie.id}>
                <div className="poster-carrosel">
                  <img src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} title={serie.name} alt={serie.poster_path} />
                </div>

                <div class="info-carrosel">
                  <h3>{serie.name}</h3>
                  <div className="release_date">{dateFormat(serie.release_date, 'd mmmm, yyyy')}</div>
                </div>
              </Link>
            </div>)}
          </Slider>
        </div>
      </React.Fragment>
    )
  }
}