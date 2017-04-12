/**
 * Created by Administrator on 2016/7/1.
 */
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import {clear} from 'redux/modules/clearSession';

@asyncConnect([{
  deferred: false,
  promise: ({store: {dispatch}}) => {
    const promises = [dispatch(clear())];
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    data: state.clearSession.data
  })
)
export default class ClearSession extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  render() {
    const {data} = this.props;
    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}
