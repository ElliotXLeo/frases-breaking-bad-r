import React from 'react';
import PropTypes from 'prop-types';

const Frase = ({ quotes }) => {

  if (quotes.quote) {
    return (
      <div className="contenedor__frase" >
        <h1>👓Frases Breaking Bad👓</h1>
        <h2>{quotes.quote}</h2>
        <h3>{quotes.author}</h3>
      </div >
    );
  } else {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }

}

Frase.propTypes = {
  quotes: PropTypes.object.isRequired
}

export default Frase;