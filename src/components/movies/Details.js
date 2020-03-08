import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Details extends Component {
  state = {
    details: {}
  };

  componentDidMount() {
    const apikey = 'e634dde44fe5cdc96fb075d579867ca5';
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apikey}&language=en-US`
      )
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { details } = this.state;
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Back To home
        </Link>
        <div className="card mx-auto" style={{ width: '35rem' }}>
          <h5 className="card-header">
            <strong>{details.title}</strong>
          </h5>
          <div className="card-body">
            <img
              className="card-img-top mx-auto"
              src={
                details.poster_path === null
                  ? 'https://via.placeholder.com/518x600?text=do not+find+image'
                  : `https://image.tmdb.org/t/p/w500${details.poster_path}`
              }
              alt="..."
              style={{ width: '518px', height: '600px' }}
            />
            <ul className="list-group mt-2">
              <li className="list-group-item">
                <strong>Status: </strong>{' '}
                {details.status === '' ? 'No' : details.status}
              </li>
              <li className="list-group-item">
                <strong>Popularity: </strong>{' '}
                {details.popularity === '' ? 'No' : details.popularity}
              </li>
              <li className="list-group-item">
                <strong>Vote Count: </strong>{' '}
                {details.vote_count === '' ? 'No' : details.vote_count}
              </li>
              <li className="list-group-item">
                <strong>Vote Average: </strong>{' '}
                {details.vote_average === '' ? 'No' : details.vote_average}
              </li>
              <li className="list-group-item">
                <strong>Original Language: </strong>{' '}
                {details.original_language === ''
                  ? 'No'
                  : details.original_language}
              </li>
              <li className="list-group-item">
                <strong>Details: </strong>{' '}
                {details.overview === '' ? 'No' : details.overview}
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
