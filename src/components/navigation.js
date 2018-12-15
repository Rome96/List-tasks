import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="text-white">
                    {this.props.title} {/* obtenemos las propiedades de la clase*/}
                </a>
            </nav>
        )
    }
}

export default Navigation;