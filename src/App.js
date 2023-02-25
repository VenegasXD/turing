import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Imagenes from "./components/Imagenes";
import Tarjetas from "./components/Tarjetas";
import Paginacion from "./components/Paginacion";
import Cuadros from "./components/Cuadros";
import Footer from "./components/Footer";
import Circulos from "./components/Circulos";

function App() {
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const initialurl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (initialurl) => {
    fetch(initialurl)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div className="fondo">
      <Navbar title="Rick and Morty" />

      <Hero />

      <div className="row row-cols-1 row-cols-lg-4 justify-content-center p-5  wee">
        <Imagenes img="https://alfabetajuega.com/hero/2020/04/rick-morty.jpg?width=1200&aspect_ratio=16:9" />
        <Imagenes img="https://ismorbo.com/wp-content/uploads/2022/08/adultswim.jpg" />
        <Imagenes img="https://i.blogs.es/b7add8/rickmorty/1366_2000.jpeg" />
      </div>

      <h1 class="display-5 fw-bold text-dark  text-center py-5 justify-content-center">
        Tarjetas de los Personajes (APIs)
      </h1>
      <Paginacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />

      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 px-5  g-5 pb-5"
        id="Personajes"
      >
        <Tarjetas characters={characters} />
      </div>

      <Paginacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <h1
        class="display-5 fw-bold text-dark  text-center justify-content-center"
        id="Acerca"
      >
        Acerca de los Personajes
      </h1>
      <div class="row row-cols-1 row-cols-lg-4  m-5">
        <Cuadros
          titulo="Rick Sánchez"
          txt="Es un viejo científico que acostumbra a hablar de manera vulgar y entre eructos, y la mayoría de las veces tiene un rastro de saliva en la boca. Es padre de Beth Sánchez y es el abuelo materno de Summer y Morty. Es un hombre que ha pasado gran parte de su vida viajando a través de diversas galaxias. Para él, la Tierra se llama Planeta Tierra del Universo C-137. Es irresponsable, asocial, chiflado, ambicioso y desconsiderado ante su propia familia, criticando en numerosas ocasiones a su yerno por ser un inútil."
        />
        <Cuadros
          titulo="Morty Smith"
          txt=" Es un chico de 14 años, nieto de Rick, quien lo usa frecuentemente en sus aventuras. Posee una inteligencia pobre, es de estatura baja para su edad y está enamorado de una compañera de escuela llamada Jessica. Al avanzar la serie, toma más valor a la hora de enfrentar situaciones peligrosas. Con su bajo nivel de inteligencia sirve como contrapunto a la de su abuelo Rick, lo cual hace que sea el compañero de aventuras ideal."
        />
        <Cuadros
          titulo="Summer Smith"
          txt="Es la hermana mayor de Morty, de 17 años, una típica adolescente que suele ser superficial y obsesionada con mejorar su imagen frente a sus amigos. Es en general parecida a su madre y generalmente se la muestra como una chica lista y con sentido del humor, pero también muestras rastros de su padre como la búsqueda de aprobación. Ocasionalmente muestra celos de Morty por ser el acompañante de Rick en sus viajes interdimensionales."
        />
        <Cuadros
          titulo="Jerry Smith"
          txt="Es el padre de Morty y de Summer. Es una persona bastante patética; Rick lo odia por haberle quitado a su hija, es un mal padre de familia, es inseguro de sí mismo y tiene problemas en su matrimonio con Beth. Es despedido de su trabajo en la agencia de publicidad donde trabajaba por su alto nivel de incompetencia y estupidez. Siempre entra en conflicto con Rick debido a que este siempre está de aventuras con Morty, y aunque trata de ganarse el respeto y atención de sus hijos, no lo logra."
        />
      </div>

      <Circulos />

      <Footer />
    </div>
  );
}

export default App;
