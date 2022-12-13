import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">TOP</Link>
        </li>
        <li>
          <Link to="/css-modules">CSS Modules</Link>
        </li>
      </ul>
    </nav>
  );
};
