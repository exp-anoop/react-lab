import React from 'react';

/* class Header extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
} */

// Stateless functional components
const Header = (props) => {
    return <h1>{props.title}</h1>;
}

Header.defaultProps = {
    title: "Anoop's App"
}

export default Header;