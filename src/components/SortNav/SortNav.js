import React, { Component, PropTypes } from 'react';

export default class SortNav extends Component {
  static propTypes = {
    styles: PropTypes.object
  }
  constructor() {
    super();
  }
  render() {
  	const {styles} = this.props;
    return (
        <ul className={styles.gdz_nav}>
          <li className={styles.font_size_c}><a href=''>综合</a></li>
          <li className={styles.font_size_c}><a href=''>人气</a></li>
          <li className={styles.font_size_c}><a href=''>销量</a></li>
          <li className={styles.font_size_c}><a href='' className={styles.bg}>信用</a></li>
        </ul>
    )
  }
}