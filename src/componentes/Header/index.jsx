import React from "react";
import Helmet from 'react-helmet';

class Header extends React.Component {
    render(props) {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <link rel="canonical" href={this.props.canonical} />
                    <meta name="description" content={this.props.description}/>
                </Helmet>
            </div>
        )
    }
}

export default Header;
