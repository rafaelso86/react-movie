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
            slidesToShow: 5,
            slidesToScroll: 5,
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
                <div className="content">
                    <h2>Os filmes mais populares</h2>

                    <Slider className="filmes-populares" {...settings}>
                      {this.state.items.map(filme => <div style={{ width: '220px' }}>
                        <Link to={'/filme/' + filme.id}>
                          <img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} style={{ width: '220px' }} title={filme.title} alt={filme.poster_path}/>
                          <h3>{filme.title}</h3>
                          <div className="release_date">{dateFormat(filme.release_date, 'd mmmm, yyyy')}</div>
                          <div className="vote">{filme.vote_average}</div>
                        </Link>
                      </div>)}
                    </Slider>
                </div>
            </React.Fragment>
        )
    }
}