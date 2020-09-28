import React, {Component} from 'react';
import kamrul from '../assets/images/kamrul.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <header>
                    <div className="content-wrap">
                        <h1>{this.props.item.header.name}</h1>
                        <h2>{this.props.item.header.developer}</h2>
                        <p>{this.props.item.header.description}</p>
                        <div><img className="image" src={kamrul} /></div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;