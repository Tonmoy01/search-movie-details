import React from 'react';
import { Link } from 'react-router-dom';

const Movie = props => {
  const { movie } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 mx-auto shadow-sm" style={{ width: '30rem' }}>
        <div className="card-body">
          <img
            src={
              `https://image.tmdb.org/t/p/w500${movie.poster_path}` === null
                ? 'https://via.placeholder.com/518x600?text=do not+find+image'
                : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
            className="card-img-top mb-3"
            alt="..."
          />
          <h5>{movie.original_title}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-calendar-times"></i> Realse Date:{' '}
            </strong>{' '}
            {movie.release_date}
          </p>
          <Link
            to={`details/movie/${movie.id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right"></i> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
