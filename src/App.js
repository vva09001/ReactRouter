import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>Demo react-redux : {this.props.count}</p>
          <button onClick={this.props.onIncrement}> INCREMENT </button>
          <button onClick={this.props.add10}> ADD-10 </button>
        </div>
      </div>
    );
  }
}
const mapSateToProps = state => {
  return {
    count: state.count
  }
}
const mapDisptachToProps = distpatch => {
  return {
    onIncrement: () => distpatch({ type: 'INCREMENT' }),
    add10: () => distpatch({ type: 'ADD10', number: 10 })
  }
}
export default connect(mapSateToProps, mapDisptachToProps)(App);
