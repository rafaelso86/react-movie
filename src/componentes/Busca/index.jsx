import React from 'react';

class Busca extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick() {

        let valorBusca = this.state.value;

        if (valorBusca) {
            window.location.href = '/busca/' + valorBusca;
        }

        else {
            window.location.href = '/busca/null';
        }

        console.log('clicou')
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" placeholder="Buscar por filmes, séries ou atores" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Buscar</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Busca;