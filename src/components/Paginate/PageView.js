/**
 * Created by lyj on 2016/5/16.
 */
import React, { Component, PropTypes } from 'react';

export default class PageView extends Component {
  static propTypes = {
    pageLinkClassName: PropTypes.string,
    pageClassName: PropTypes.string,
    page: PropTypes.number.isRequired,
    activeClassName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }

  render() {
    const linkClassName = this.props.pageLinkClassName;
    let cssClassName = this.props.pageClassName;

    if (this.props.selected) {
      if (typeof(cssClassName) !== 'undefined') {
        cssClassName = cssClassName + ' ' + this.props.activeClassName;
      } else {
        cssClassName = this.props.activeClassName;
      }
    }

    return (
      <li className={cssClassName}>
        <a {...this.props} className={linkClassName}>
          {this.props.page}
        </a>
      </li>
    );
  }
}
