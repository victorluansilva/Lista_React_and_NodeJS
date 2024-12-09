/* eslint-disable no-unused-vars */
import "./ObjetivoComReact.css";
import { objetivos } from "../../data"
const ObjetivoComReact = () => {
  return (
    <>
      <h2>Meus Objetivos com React</h2>
      <div className="goal-card">
        <ul>
          {objetivos.map((objetivo, index) => (
            <li key={index}>{objetivo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ObjetivoComReact;
