/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcetp/CoreConcept.jsx";
import "./MainContent.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact.jsx";

import {conceitosChaves} from "../../data.js"

const handleConceptCick = (e) => {
  //Método para lidar com o click que "joga" um alert com o texto do elemento target/"alvo" clicado  
  alert(e.target.innerText);
}
const MainContent = () => {
  return (
    <main>
      <MeuObjetivoComReact />
      <section id="core-concepts">
        {conceitosChaves.map((conceitoChave, key) => {
          // Exemplo de props via 'Spread Operators ...conceitoChave e exemplo de Handler de click no componente CoreConcept '
          return <CoreConcept key={key} {...conceitoChave} action={handleConceptCick}/>;
        })}
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default MainContent;