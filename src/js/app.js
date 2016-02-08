import React from 'react'
import {connect} from 'react-redux'

export default connect(
  storeState => {
    return {
      placeholderProp: storeState.placeholderStore
    }
  }
)(
  class extends React.Component {
    render() {
      return <div> {this.props.placeholderProp} </div>
    }
  }
);