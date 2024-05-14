import { useParams } from "react-router-dom";

const GameAdDetails = () => {
  const { id } = useParams();
  return (
    <div className="game-details-container">
      <h2>Gamedetails</h2>
    </div>
  );
};

export default GameAdDetails;
