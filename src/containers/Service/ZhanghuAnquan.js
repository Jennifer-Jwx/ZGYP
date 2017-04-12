import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class ZhanghuAnquan extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '账户安全'}]);
  }

  render() {
  	const styles = require('./Service.scss');
  	const _this = this;
    return(
      <menu className={styles.all_wap + ' ' + styles.background_color}>
    		<form action="">
          <label className={styles.regs_box}><span className={styles.font_size_c + ' ' + styles.checkbox_txt}>手机号：</span><input type="text" className={styles.all_input}/></label>
          <a href="" className={styles.all_button + ' ' + styles.grzx_aq_butn}>发送验证码</a>
          <div className={styles.clear}></div>
          <label className={styles.regs_box + ' ' + styles.grzx_aq_mt}><span className={styles.font_size_c + ' ' + styles.checkbox_txt}>验证码：</span><input type="text" className={styles.all_input + ' ' + styles.a4}/></label>
        </form>
      </menu>
    );
  }
}
