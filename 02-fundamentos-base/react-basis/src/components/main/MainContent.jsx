/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcetp/CoreConcept.jsx";
import "./MainContent.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact.jsx";
import { useState } from "react";
import { conceitosChaves } from "../../data.js"
import TabButton from "../tabbutton/TabButton.jsx";

const MainContent = () => {

  const [tabContent, setTabContent] = useState(0);

  const handleConceptClick = (e) => {
    alert(e.target.innerText);
  }

  console.log(conceitosChaves)

  const handleTabButton = (id) => {
    //console.log(e.target.innerText);
    setTabContent(id);
  }

  return (<></>
    // <main>
    //   <MeuObjetivoComReact />
    //   <section className="core-concepts">
    //     <div className="concepts">
    //     {conceitosChaves && conceitosChaves.map((conceitoChave, key) => {
    //       // Exemplo de props via 'Spread Operators ...conceitoChave e exemplo de Handler de click no componente CoreConcept '
    //       return <CoreConcept key={key} {...conceitoChave} action={handleConceptClick} />;
    //     })}
    //     </div>
    //     <div className="examples">
    //       <h2>Exemplos de código</h2>
    //       <menu>
    //         {/* <TabButton titulo='Botão'  /> */}
    //         {conceitosChaves && conceitosChaves.map((conceitoChave, key) => {
    //           return <TabButton key={key} onClick={() => { handleTabButton(conceitoChave.id) }}>{conceitoChave.titulo}</TabButton>
    //         })}
    //       </menu>
    //       <div className="tab-content">
    //         <h3>Exemplo de código em {conceitosChaves[tabContent].titulo}</h3>
    //         <p></p>
    //         <pre>
    //           <code>
    //             {conceitosChaves[tabContent].exemplo}
    //           </code>
    //         </pre>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
};

export default MainContent;