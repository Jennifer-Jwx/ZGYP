import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class WuliuGenzong extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '订单跟踪'}]);
  }

  render() {
  	const styles = require('./Service.scss');
  	const _this = this;
    return(
      <menu className={styles.all_wap + ' ' + styles.background_color + ' ' + styles.grzx_wl}>
        <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>订单号：54587257128715814558</h1>
        <ul className={styles.ul_xq}>
            <li>
                <h3>您提交了订单，请等待确认发货</h3>
                <h4>2016-08-12  14:20:25</h4>
            </li>
            <li>
                <h3>您提交了订单，请等待确认发货</h3>
                <h4>2016-08-12  14:20:25</h4>
            </li>
            <li>
                <h3>您提交了订单，请等待确认发货</h3>
                <h4>2016-08-12  14:20:25</h4>
            </li>
            <li>
                <h3>您提交了订单，请等待确认发货</h3>
                <h4>2016-08-12  14:20:25</h4>
            </li>
            <li>
                <h3>您提交了订单，请等待确认发货</h3>
                <h4>2016-08-12  14:20:25</h4>
            </li>
            <li>
                <h3>您提交了订单，请等待确认发货</h3>
                <h4>2016-08-12  14:20:25</h4>
            </li>
        </ul>
    </menu>
    );
  }
}
