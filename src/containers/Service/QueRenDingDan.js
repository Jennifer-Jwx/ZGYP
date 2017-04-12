import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class QueRenDingdan extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '确认订单'}]);
  }

  render() {
  	const styles = require('./Service.scss');
  	const _this = this;
    return(
      <div>
          <article className={styles.service + ' ' + styles.air}>
              <ul className={styles.aitove}>
                  <li>
                      <div className={styles.atv01}><i className={styles.icon}><img src="http://www.goto720.com/ypapp/svg/gps.svg" alt=""/></i>艺品配送</div>
                      <div className={styles.atv02}>
                          <p className={styles.p1}><span>收货人：埃尔法</span><span>电话：13148975333</span></p>
                          <p className={styles.p1}>吉林省长春市  朝阳区南湖大路与辉南街......</p>
                      </div>
                      <div className={styles.atv03}></div></li>
              </ul>
            </article>
            <footer className={styles.js_bottom}>
                <span>实付款  ¥ 1800.00</span> <a className={styles.btn_a + ' ' + styles.red_01} href="javascript:void(0)">立即支付</a>
            </footer>
      </div>
    );
  }
}
