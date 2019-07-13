import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  async componentDidMount() {
    let { data } = await axios.get('/api/people');
    this.setState({ people: data });
  }

  render() {
    return (
      <div className="App">
        {this.state.people.map(p => {
          return <p key={p.id}>{p.name}</p>;
        })}
      </div>
    );
  }
}
