import React from 'react';

const Header = props => (
  <header style={{ backgroundColor: props.color }}>
    <h3>{props.title}</h3>
  </header>
);

export default Header;