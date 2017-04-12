import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class ZiLiao extends Component {
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
        <div className={styles.grzx_head_wap + ' ' + styles.grzx_zl_head}>
            <div className={styles.head_icon + ' ' + styles.head_icon_mt}><img src="http://www.goto720.com/ypapp/photo/zx1.jpg" alt=""/></div>
            <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.head_butn + ' ' + styles.font_size_b}>修改头像</a>
        </div>
        <form>
            <label className={styles.regs_box}><span className={styles.font_size_c + ' ' + styles.a2 + ' ' + styles.checkbox_txt}>昵称：</span><input type="text" className={styles.all_input + ' ' + styles.a3}/></label>
            <label className={styles.regs_box}><span className={styles.font_size_c + ' ' + styles.a2 + ' ' + styles.checkbox_txt}>输入验证：</span><input type="text" className={styles.all_input + ' ' + styles.a3}/></label>
            <label className={styles.regs_box}>
                <span className={styles.font_size_c + ' ' + styles.a2 + ' ' + styles.checkbox_txt}>性别：</span>
                <ul className={styles.grzx_zl_radio}>
                    <li>
                        <i><b></b></i>
                        <p className={styles.font_size_c}>男</p>
                    </li>
                    <li className={styles.off}>
                        <i><b></b></i>
                        <p className={styles.font_size_c}>女</p>
                    </li>
                    <input type="text" value="" className={styles.sub_val}/>
                </ul>
            </label>
            <label className={styles.regs_box}><span className={styles.font_size_c + ' ' + styles.a2 + ' ' + styles.checkbox_txt}>设置密码：</span><input type="password" className={styles.all_input + ' ' + styles.a3}/></label>
            <label className={styles.regs_box}><span className={styles.font_size_c + ' ' + styles.a2 + ' ' + styles.checkbox_txt}>确认密码：</span><input type="password" className={styles.all_input + ' ' + styles.a3}/></label>
        </form>
        <footer className={styles.gdz_bottom + ' ' + styles.grzx_gm_bottom + ' ' + styles.pos_fixed + ' ' + styles.box_show}>
            <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.butna + ' ' + styles.font_size_c}>保存</a>
        </footer>
    </menu>
    );
  }
}
