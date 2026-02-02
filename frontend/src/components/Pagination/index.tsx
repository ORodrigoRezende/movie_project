import Arrow from "../../assets/img/arrow.svg";
import "./styles.css";

function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled>
          <img src={Arrow} alt="Anterior" />
        </button>

        <p>{`${1} de ${3}`}</p>

        <button className="dsmovie-pagination-button">
          <img
            src={Arrow}
            alt="Próximo"
            className="dsmovie-flip-horizontal"
          />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
