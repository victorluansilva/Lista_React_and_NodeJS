const content = [
  [
    "React é extramamente popular",
    "Facilita a construção de estruturas complexas de UI",
    "É poderoso e flexível",
    "Possui um ecosistema muito ativo e versátil"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (ex: useEffect())",
    "Renderização dinâmica"
  ],
  [
    "Página official (react.dev)",
  ]
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = ""; // Limpa o conteúdo existente
  list.innerHTML = listContent; // Insere um novo conteúdo
  tabContent.append(list);
}

function highlightButton(btn) {
  // Limpa as estilzações existentes
  btnWhyReact.className = "";
  btnCoreFeature.className = "";
  btnResources.className = "";
  btn.className = "active"; // Define a nova estilização
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}

displayContent(content[0]); 

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);
