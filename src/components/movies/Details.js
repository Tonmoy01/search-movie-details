import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Details extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    const apikey = 'e634dde44fe5cdc96fb075d579867ca5';
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apikey}&language=en-US`
      )
      .then((res) => {
        this.setState({ details: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { details } = this.state;
    return (
      <React.Fragment>
        <Link to='/' className='btn btn-dark btn-sm mb-4'>
          Back To Home
        </Link>
        <div className='container'>
          <div className='card mx-auto' style={{ maxWidth: '35rem' }}>
            <h5 className='card-header'>
              <strong>{details.title}</strong>
            </h5>
            <div className='card-body'>
              <img
                className='card-img-top mx-auto'
                src={
                  details.poster_path === null
                    ? 'https://via.placeholder.com/518x600?text=Image+not+available'
                    : `https://image.tmdb.org/t/p/w500${details.poster_path}`
                }
                alt={details.title}
                style={{ width: '100%', height: 'auto' }}
              />
              <ul className='list-group mt-2'>
                <li className='list-group-item'>
                  <strong>Status: </strong> {details.status || 'No'}
                </li>
                <li className='list-group-item'>
                  <strong>Popularity: </strong> {details.popularity || 'No'}
                </li>
                <li className='list-group-item'>
                  <strong>Vote Count: </strong> {details.vote_count || 'No'}
                </li>
                <li className='list-group-item'>
                  <strong>Vote Average: </strong> {details.vote_average || 'No'}
                </li>
                <li className='list-group-item'>
                  <strong>Original Language: </strong>{' '}
                  {details.original_language || 'No'}
                </li>
                <li className='list-group-item'>
                  <strong>Details: </strong> {details.overview || 'No'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
