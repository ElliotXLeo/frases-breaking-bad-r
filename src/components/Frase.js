import React, { Fragment } from 'react';

const Frase = ({ quotes }) => {

  // return (
  //   <Fragment>
  //     {
  //       quotes ?
  //         (
  //           <div className="contenedor__frase" >
  //             <h1>👓Frases Breaking Bad👓</h1>
  //             <h2>{quotes.quote}</h2>
  //             <h3>{quotes.author}</h3>
  //           </div >
  //         )
  //         : (
  //           <div className="spinner">
  //             <div className="double-bounce1"></div>
  //             <div className="double-bounce2"></div>
  //           </div>
  //         )
  //     }
  //   </Fragment>
  // );

  if (quotes) {
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

export default Frase;