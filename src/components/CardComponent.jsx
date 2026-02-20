import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CardComponent = ({ project }) => {

  const { dispatch } = useContext(AppContext);

  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>

      <button onClick={() =>
        dispatch({ type: "ADD_FAVORITE", payload: project })
      }>
        Add Favorite
      </button>
    </div>
  );
};

export default CardComponent;