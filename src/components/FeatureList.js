import React, { Component } from 'react'
import { connect } from 'react-redux';

export class FeatureList extends Component {
  renderFeatures(){
      return this.props.features.map(feature => {
          return <li key={feature}>{feature}</li>
      })
  }
  
    render() {
    return (
      <div>
          <h4>Comment List</h4>
        <ul>
            {this.renderFeatures()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
    return { features: state.features};
}

export default connect(mapStateToProps)(FeatureList);
