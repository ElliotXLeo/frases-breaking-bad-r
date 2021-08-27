import { useEffect, useState } from "react";
import Frase from "./components/Frase";

function App() {

  const [quotes, setFrase] = useState({});

  // const consultarAPI = () => {
  //   let frase = '';
  //   fetch('https://breakingbadapi.com/api/quotes')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       const i = Math.floor(Math.random() * (69 - 0) + 0);
  //       setFrase(data[i]);
  //     });
  //   ;
  // };

  const consultarAPI = async () => {
    const i = Math.floor(Math.random() * (69 - 0) + 0);
    // setFrase((await (await fetch('https://breakingbadapi.com/api/quotes')).json())[i]);

    const api = await fetch('https://breakingbadapi.com/api/quotes');
    const data = await api.json();
    setFrase(data[i]);
  };

  useEffect(() => {
    consultarAPI();
  }, [])

  return (
    <div className="contenedor">
      <Frase
        quotes={quotes}
      />
      <button
        className="contenedor__boton"
        onClick={() => { consultarAPI() }}
      >
        🎩Obtener Frase🎩
      </button>
    </div>
  );
}

export default App;
