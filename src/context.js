import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return {
        ...state,
        movie_list: action.payload,
        heading: 'Search Results'
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    movie_list: [],
    heading: 'Your Searching List',
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    const apikey = 'e634dde44fe5cdc96fb075d579867ca5';
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
      )
      .then(res => {
        this.setState({ movie_list: res.data.results });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
