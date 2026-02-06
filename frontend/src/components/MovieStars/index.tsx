import StarFull from "../../assets/img/star-full.svg";
import StarHalf from "../../assets/img/star-half.svg";
import StarEmpty from "../../assets/img/star-empty.svg";
import "./styles.css";

type Props = {
  score: number;
};

type StarProps = {
  fill: number;
};

function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }: StarProps) {
  if (fill === 0) {
    return <img src={StarEmpty} alt="Estrela vazia" />;
  } else if (fill === 0.5) {
    return <img src={StarHalf} alt="Meia estrela" />;
  } else {
    return <img src={StarFull} alt="Estrela cheia" />;
  }
}

function MovieStars({score}: Props) {

  const fills = getFills(score);
  
  return (
    <div className="dsmovie-stars-container">
      {fills.map((fill, index) => (
        <Star key={index} fill={fill} />
      ))}
    </div>
  );
}

export default MovieStars;
