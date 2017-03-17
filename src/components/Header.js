import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends React.Component {
  render() {
      console.log('props are', this.props)
    return (
      <div>Header</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    homeReducer: state.homeReducer,
  }
}
export default connect(mapStateToProps, actions)(Header);
