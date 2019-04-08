<<<<<<< HEAD
//component for descriptions of each member of the board of directors
=======
>>>>>>> 465aaa67c26e82e3d845e1acedfc33090b79fc86
import React, { Component } from 'react';
import './css/BoardOfDirectors.css';

class BoardOfDirectors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            position: props.position,
            description: props.description
        }
    }

    render() {
        return(
            <div>
                <h3>{ this.state.name }</h3>
                <h4>{ this.state.position }</h4>
                <p>{ this.state.description }</p>
            </div>
        );
    }
}

export default BoardOfDirectors;
