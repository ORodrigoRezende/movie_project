import StarFull from "../../assets/img/star-full.svg";
import StarHalf from "../../assets/img/star-half.svg";
import StarEmpty from "../../assets/img/star-empty.svg";
import "./styles.css";

function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <img src={StarFull} alt="Estrela cheia" />
      <img src={StarFull} alt="Estrela cheia" />
      <img src={StarFull} alt="Estrela cheia" />
      <img src={StarHalf} alt="Meia estrela" />
      <img src={StarEmpty} alt="Estrela vazia" />
    </div>
  );
}

export default MovieStars;
