import { useParams, useEffect } from "react-router-dom";

const GameAds = () => {
  const { gameId } = useParams();

  useEffect(() => {
    // Perform data fetching based on productId
  }, [gameId]);

  return <div>GameAds</div>;
};

export default GameAds;
