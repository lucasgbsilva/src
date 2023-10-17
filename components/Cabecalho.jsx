import { Link } from "react-router-dom";

// navbar: https://getbootstrap.com/docs/5.0/components/navbar/
export default function Cabecalho() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Lucas's App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fetch" className="nav-link">
                Exercício Fetch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}