import React, { Component } from 'react'
import { connect } from 'react-redux'; 

import * as actions from '../actions';
import requireAuth from '../components/requireAuth';


export class Features extends Component {
  
  state = {feature: ''}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitFeatures(this.state.feature);
    this.setState({feature: ''});
  };
  
  handleChange = (event) => {
    this.setState({feature: event.target.value});
  };
  
  render() {

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a feature</h4>
        <textarea onChange={this.handleChange} value = {this.feature} />
        <div>
          <button>Submit Feature</button>
        </div>
      </form>
      <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(Features));
