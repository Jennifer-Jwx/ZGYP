import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class ShouHuoDiZhi extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '收货地址'}]);
  }

  render() {
  	const styles = require('./Service.scss');
  	const _this = this;
    return(
      <div>
      <menu className={styles.regs}>
        <table className={styles.form_login}>
            <tbody>
            <tr>
                <th className={styles.font_size_b}>收货人：</th>
                <td>
                    <div className={styles.inp_a}><input type="text"/></div>
                </td>
            </tr>
            <tr>
                <th className={styles.font_size_b}>手机号码：</th>
                <td>
                    <div className={styles.inp_a}><input type="text"/></div>
                </td>
            </tr>
            <tr>
                <th className={styles.font_size_b}>所在区域：</th>
                <td>
                    <div className={styles.inp_a}><input type="text"/></div>
                </td>
            </tr>
            <tr>
                <th className={styles.font_size_b}>详细地址：</th>
                <td>
                    <div className={styles.inp_a + ' ' + styles.border_rad}><textarea rows="3" cols="30"></textarea></div>
                </td>
            </tr>
            <tr>
                <th className={styles.font_size_b}>配送方式：</th>
                <td><label className={styles.checkBOx + ' ' + styles.font_size_b}><input className={styles.checkbox_in} checked="true" type="checkbox"/><i className={styles.on}><b></b></i>&nbsp;&nbsp;&nbsp;&nbsp;顺丰快递<span className={styles.red}>( ¥20 )</span></label>
                </td>
            </tr>
            <tr>
                <th className={styles.font_size_b}></th>
                <td><label className={styles.checkBOx + ' ' + styles.font_size_b}><input className={styles.checkbox_in} checked="true" type="checkbox"/><i className={styles.on + ' ' + styles.off}><b></b></i>&nbsp;&nbsp;&nbsp;&nbsp;顺丰快递<span className={styles.red}>( ¥20 )</span></label>
                </td>
            </tr>
            <tr>
                <th className={styles.font_size_b}></th>
                <td><label className={styles.checkBOx + ' ' + styles.font_size_b}><input className={styles.checkbox_in} checked="true" type="checkbox"/><i className={styles.on + ' ' + styles.off}><b></b></i>&nbsp;&nbsp;&nbsp;&nbsp;自提</label>
                </td>

            </tr>
            </tbody>
        </table>
        <div className={styles.b_lay_box}>
            <a href="javascript:void(0)" className={styles.laybox_pad}>次日到达</a><a href="javascript:void(0)" className={styles.laybox_pad}>隔日到达</a><a href="javascript:void(0)" className={styles.laybox_pad}>顺丰快递</a>
        </div>
    </menu>
    <footer id="index_footer">
        <menu>
            <nav>
                <center>
                    <span className={styles.all_button + ' ' + styles.font_size_b + ' ' + styles.sh_save}>保存</span>
                </center>
            </nav>
        </menu>
    </footer>
    </div>
    );
  }
}
