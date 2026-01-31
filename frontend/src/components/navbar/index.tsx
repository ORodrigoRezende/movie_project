import GithubIcon from "../../assets/img/github.svg";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="movie-nav-content">
          <h1>Movie Project</h1>

          <a href="https://github.com/ORodrigoRezende">
            <div className="movie-contact-container">
              <img src={GithubIcon} alt="GitHub" />
              <p className="movie-contact-link">/ORodrigoRezende</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
