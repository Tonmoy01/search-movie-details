import React, { Component } from 'react';
import { Consumer } from '../../context';
import Movie from './Movie';

export class Movies extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { heading, movie_list } = value;
          return (
            <React.Fragment>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row mx-0">
                {movie_list.map(item => (
                  <Movie key={item.id} movie={item} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
