import React from 'react';

import axios from 'axios';

export default class Filme extends React.Component {
  state = {
    items: []
  }

    componentDidMount() {
    
        const api_key = 'c5ff834a7a048ff4e4c1e1610a68fb47';
        const url = 'https://api.themoviedb.org/3/';
        const id = '550';
        const categoria = 'movie';

        axios.get(`${url}${categoria}/${id}?api_key=${api_key}`)
        .then(res => {
            const items = res.data;
            this.setState({ items });
        })
  }

  render() {
      return (
        
      <h1>{this.state.items.original_title}</h1>
    )
  }
}