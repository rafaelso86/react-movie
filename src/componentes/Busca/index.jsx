import React from 'react';
import './index.scss';

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
            window.location.href = '/busca?query=' + valorBusca;
        }

        else {
            window.location.href = '/busca?query=null';
        }
    }

    render() {
        return (
            <div className="busca-home">
                <div className="mask"></div>
                <div className="area-busca">
                    <div className="campo-busca">
                        <input type="text" placeholder="O que você gostaria de assistir agora?" value={this.state.value} onChange={this.handleChange} />
                        <button onClick={this.handleClick}></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Busca;