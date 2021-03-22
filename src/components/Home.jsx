import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul className="exercise_list">
      <li>
        <Link to="/useReducer" className="linkstyle">
          <button>useReducer Basic</button>
        </Link>
      </li>
      <li>
        <Link to="/useContext" className="linkstyle">
          <button>useContext Basic</button>
        </Link>
      </li>
      <li>
        <Link to="/redux" className="linkstyle">
          <button>Redux</button>
        </Link>
      </li>
    </ul>
  );
}
