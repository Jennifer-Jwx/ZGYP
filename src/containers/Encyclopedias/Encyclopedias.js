/**
 * Created by zfc on 2017/2/14.
 * 术百科------------------------------------------------------------------
 */

import React, {Component, PropTypes} from 'react';
import {Round, ModuleElementOne} from 'components';
// import { push } from 'react-router-redux';
// import * as homeAction from 'redux/modules/home';
// import {ProductInfo, HomePagingBar} from 'components';

export default class Encyclopedias extends Component {
  static propTypes = {
    location: PropTypes.object,
    src: PropTypes.string
  };

  constructor() {
    super();
  }

  handleClick() {
    // 获取路由后面的内容
    console.log(this.props.location.pathname);
    if ( location.pathname === '/Encyclopedias' ) {
      alert('这是这个页面');
    } else {
      alert('不等于');
    }
  }

  render() {
    const styles = require('./Encyclopedias.scss');
    console.log(this.props.location.pathname);
    return (
      <article className={styles.background_color + ' ' + styles.padding_top} id="gdz">
        <div>
          <Round/>
          <div className={styles.sbk_HangYe}>
            <ModuleElementOne src="http://tupian.goeasy.net:9999/yipinwang/mobile/img/sbk_img1.jpg"/>
            <div className={styles.HangYe_box}>
            </div>
          </div>
          <ul>
            <li onClick={this.handleClick.bind(this)} className="eat">123</li>
          </ul>
        </div>
      </article>
    );
  }
}

