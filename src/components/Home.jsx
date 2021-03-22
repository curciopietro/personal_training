import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ul className="exercise_list">
      <li>
        <Link to="/useReducer" className="linkstyle">
          <button>useReducer Basic</button>
        </Link>
      </li>
    </ul>
  );
}
