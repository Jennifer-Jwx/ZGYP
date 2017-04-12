import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class SheZhi extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/grzx', text: '个人中心'}, {liclasses: '', ahref: '', text: '设置'}]);
  }

  render() {
  	const styles = require('./Service.scss');
  	const _this = this;
    return(
      <menu className={styles.all_wap + ' ' + styles.background_color}>
        <ul className={styles.grzx_sz}>
            <li>
                <a href="#!/grzx_aq">
                    <i><img src="http://www.goto720.com/ypapp/img/grzx_nav_icon1.png" alt=""/></i>
                    <span className={styles.font_size_b}>账户与安全</span>
                    <cite><img src="http://www.goto720.com/ypapp/img/grzx_right.png" alt=""/></cite>
                </a>
            </li>
            <li>
                <a href="#!/shdz">
                    <i><img src="http://www.goto720.com/ypapp/img/grzx_nav_icon2.png" alt=""/></i>
                    <span className={styles.font_size_b}>收货地址</span>
                    <cite><img src="http://www.goto720.com/ypapp/img/grzx_right.png" alt=""/></cite>
                </a>
            </li>
            <li>
                <a href="#!/wr_js_fp">
                    <i><img src="http://www.goto720.com/ypapp/img/grzx_nav_icon3.png" alt=""/></i>
                    <span className={styles.font_size_b}>发票信息</span>
                    <cite><img src="http://www.goto720.com/ypapp/img/grzx_right.png" alt=""/></cite>
                </a>
            </li>
        </ul>
      </menu>
    );
  }
}
