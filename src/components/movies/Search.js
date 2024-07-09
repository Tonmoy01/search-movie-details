import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

export class Search extends Component {
  state = {
    movieName: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findMovie = (dispatch, e) => {
    e.preventDefault();

    const apikey = 'e634dde44fe5cdc96fb075d579867ca5';
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${this.state.movieName}`
      )
      .then((res) => {
        dispatch({
          type: 'SEARCH_MOVIE',
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='container'>
              <div className='card card-body mb-4 p-4'>
                <h1 className='display-4 text-center'>
                  <i className='fas fa-film'></i> Search Your Favorite Movie
                </h1>
                <form onSubmit={this.findMovie.bind(this, dispatch)}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='Search movie'
                      name='movieName'
                      value={this.state.movieName}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type='submit'
                    value='Get Search Movie'
                    className='btn btn-dark btn-lg btn-block'
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
