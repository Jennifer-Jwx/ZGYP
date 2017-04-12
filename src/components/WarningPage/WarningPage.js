/**
 * Created by lyj on 2016/9/20.
 */
import React, { Component, PropTypes } from 'react';

export default class WarningPage extends Component {
  static propTypes = {
    text: PropTypes.string,
    children: PropTypes.object
  }

  constructor() {
    super();
  }

  render() {
    const styles = require('./WarningPage.scss');
    const {text, children} = this.props;
    return (
      <div className={styles.component}>
        <div className={styles.warningContainer}>
          <img src="http://tupian.goeasy.net:9999/yipinwang/logo.png" alt=""/>
          <p className={styles.title}>艺品网提醒您</p>
          <p className={styles.content}>{text}</p>
          {children}
        </div>
      </div>
    );
  }
}
