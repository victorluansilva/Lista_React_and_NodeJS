/* eslint-disable react/prop-types */
import "./CoreConcept.css";
const CoreConcept = ({ id, titulo, conceitos, action }) => {
  return (
    <div id={`concept-${id}`} className="concepts" onClick={action}>
      <h2>{titulo}</h2>
      <ul id="core-concept-list">
        {conceitos.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CoreConcept;
