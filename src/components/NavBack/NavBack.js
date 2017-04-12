import React, { Component, PropTypes } from 'react';

export default class NavBack extends Component {
  static propTypes = {
    styles: PropTypes.object
  }
  constructor() {
    super();
  }
  render() {
  	const {styles} = this.props;
    return (
        <div className={styles.title} onTouchEnd={this.changELeClassName.bind(this)}>
          <i><img data-tag='title' src='http://www.goto720.com/ypapp/img/gdz_two_sx_back.png' alt=''/></i>
        </div>
    )
  }
}