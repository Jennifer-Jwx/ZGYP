/**
 * Created by lyj on 2016/5/16.
 */
import React, { Component, PropTypes } from 'react';

export default class BreakView extends Component {
  static propTypes = {
    breakLabel: PropTypes.object.isRequired
  }

  render() {
    const label = this.props.breakLabel;

    return (
      <li className="break">
        {label}
      </li>
    );
  }
}
