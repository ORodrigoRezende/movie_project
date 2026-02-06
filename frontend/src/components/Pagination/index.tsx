import Arrow from "../../assets/img/arrow.svg";
import type { MoviePage } from "../../types/movie";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: (page: number) => void;
};

function Pagination({page, onChange}: Props) {


  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first} onClick={()=>onChange(page.number - 1)}>
          <img src={Arrow} alt="Anterior" />
        </button>

        <p>{`${page.number + 1} de ${page.totalPages}`}</p>

        <button className="dsmovie-pagination-button" disabled={page.last} onClick={()=>onChange(page.number + 1)}> 
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
