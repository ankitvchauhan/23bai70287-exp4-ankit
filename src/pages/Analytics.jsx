import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Analytics = () => {

  const { favorites, dispatch } = useContext(AppContext);

  const totalFavorites = useMemo(() => {
    return favorites.length;
  }, [favorites]);

  return (
    <div className="page">
      <h2>Analytics</h2>

      <p>Total Favorites: {totalFavorites}</p>

      {favorites.map(f => (
        <p key={f.id}>{f.title}</p>
      ))}

      <button onClick={() =>
        dispatch({ type: "CLEAR_FAVORITES" })
      }>
        Clear Favorites
      </button>
    </div>
  );
};

export default Analytics;