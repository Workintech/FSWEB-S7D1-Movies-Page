import { Link } from 'react-router-dom';

export default function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      {/* Görev 7: film'e tıklanınca /filmler/:id route'una yönlenmeli */}
      <Link to={`/filmler/${props.movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
