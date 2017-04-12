/**
 * Created by li on 2016/4/7.
 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
import {GoeasyMenu} from 'components';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object
  };

  constructor() {
    super();
  }
  // 判断路由地址显示面包削导航
  handleClick() {
    // 获取路由后面的内容
    console.log(this.props.location);
    if ( location.pathname === '/Encyclopedias' ) {
      console.log('这是这个页面');
    } else {
      console.log('不等于');
    }
  }

  render() {
    this.handleClick();
    const styles = require('./App.scss');
    return (
      <div style={{maxWidth: 640}}>
        <GoeasyMenu/>
        <Helmet {...config.app.head}/>
        <div className={styles.wrap}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
