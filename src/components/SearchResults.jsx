import { Link } from "react-router-dom";

function SearchResults({ title, id }) {
  return (
    <div className="search-results">
      <Link to={`/gameads/${id}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default SearchResults;
