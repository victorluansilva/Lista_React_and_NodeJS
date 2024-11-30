/* eslint-disable no-unused-vars */
import './Main.css';
import MeuObjetivoComReact from './MeuObjetivoComReact/MeuObjetivoComReact';

const conceitosChaves = [
  {
    id: 1,
    titulo: 'Componentes',
    conceitos: [
      'Componentes são pequenos blocos de código que podem ser reutilizados em vários lugares da interface.',
      'Os componentes são imutáveis, ou seja, não podem ser alterados diretamente.',
      'Os componentes podem ser passados props para outros componentes.',
      'Os componentes podem ser estilizados usando CSS ou CSS-in-JS.',
    ]
  }
];

  const CoreConcept = ({titulo, conceitos}) => {
  return (
    <>
    <h2>{titulo}</h2>
    <ul>
      <li>{conceitos}</li>
    </ul>
    </>
  )
};

const Main = () => {
    return (
      <main>
        <MeuObjetivoComReact />
        <section id='core-concepts'>
        <CoreConcept titulo={conceitosChaves[0].titulo}  conceitos={conceitosChaves[0].conceitos}/>
        </section>
      </main>
    );
  };

  export default Main;