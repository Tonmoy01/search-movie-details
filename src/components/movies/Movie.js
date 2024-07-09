import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const { movie } = props;
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
      <div className='card mx-auto shadow-sm' style={{ maxWidth: '20rem' }}>
        <div className='card-body'>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/518x600?text=Image+not+available'
            }
            className='card-img-top mb-3'
            alt={movie.original_title}
          />
          <h5>{movie.original_title}</h5>
          <p className='card-text'>
            <strong>
              <i className='fas fa-calendar-times'></i> Release Date:
            </strong>{' '}
            {movie.release_date}
          </p>
          <Link
            to={`details/movie/${movie.id}`}
            className='btn btn-dark btn-block'
          >
            <i className='fas fa-chevron-right'></i> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
