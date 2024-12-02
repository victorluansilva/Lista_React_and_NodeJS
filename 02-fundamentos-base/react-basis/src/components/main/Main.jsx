/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Main.css';
import MeuObjetivoComReact from './MeuObjetivoComReact/MeuObjetivoComReact';

//Atividade:
// 1- Passe o componente 'CoreConcept' para um novo arquivo e pasta.
// 2- Determine uma estilização específica do para que o conteúdo não passe da largura não passe de 32rem e o texto seja centralizado até 28rem de largura; 
// 3- Passe as props 'id', 'titulo', 'conceitos' para 'CoreConcept'
// 4- Renderize CoreConcept tendo como base o array conceitosChaves
// 5- Tire printe de sua solução e envie o commite como entrega da atividade

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
  },
  {
    id: 2,
    titulo: 'Estados e eventos',
    conceitos: [
      'Os estados são dados que são mantidos pelo componente.',
      'Os estados são imutáveis, ou seja, não podem ser alterados diretamente.',
      'Os estados são usados para controlar o estado do componente.',
      'Os estados são usados para gerenciar o estado do componente, além de lidar com eventos.',
    ],
  },
  {
    id:3,
    titulo: 'Props',
    conceitos: [
      'Props são dados que são passados de um componente pai para um componente filho.',
      'Os props são imutáveis, ou seja, não podem ser alterados diretamente.',
      'Os props são usados para passar dados entre componentes.',
      'Os props são usados para passar dados entre componentes, além de lidar com eventos.',
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