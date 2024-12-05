import imgComponent from './assets/components.png'
import imgJSX from './assets/jsx-ui.png'
import imgProps from './assets/config.png'
import imgState from './assets/state-mgmt.png'

export const conceitosChaves = [
  {
    id: 1,
    titulo: "Componentes",
    imgSrc: imgComponent,
    conceitos: [
      "Blocos fundamentais para a construção de IU. Constrói uma interface de usuário web por meio da combinação de multiplos componentes."
    ],
  },
  {
    id: 2,
    titulo: "JSX",
    imgSrc: imgJSX,
    conceitos: [
      "Retorna o código HTML (potencialmente dinâmico) para definir a tag real que será renderizada no Browser."
    ],
  },
  {
    id: 3,
    titulo: "Props",
    imgSrc: imgProps,
    conceitos: [
      "Torna os componentes configuráveis (e, portanto, reutilizáveis) passando dados de entrada para eles.",
    ],
  },
  {
    id: 4,
    titulo: "State",
    imgSrc: imgState,
    conceitos: [
      "Dados gerenciados pelo React que, quando alterados, fazem o componente ser renderizado novamente e, assim, atualizando a interface de usuário",
    ],
  },
];


export const objetivos = [
  "Criar aplicações otimizadas e de reação rápidas",
  "Criar webaps belos e dinâmicos",
  "Criar meu próprio website",
];