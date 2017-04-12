import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class XinZengFaPiao extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/wr_js_jsuan', text: '结算'}, {liclasses: '', ahref: '', text: '新增发票'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
      <menu className={styles.regs}>
        <form>
            <label className={styles.regs_box}><span className={styles.font_size_b + ' ' + styles.wid21 + ' ' + styles.checkbox_txt}>发票类型</span></label>
            <div className={styles.b_lay_box}>
                <a href="javascript:void(0)" className={styles.font_size_b + ' ' + styles.laybox_pad_a}>普通发票</a><a href="javascript:void(0)" className={styles.b_lay_box_active + ' ' + styles.font_size_b + ' ' + styles.laybox_pad_a}>增值税发票</a><a href="javascript:void(0)" className={styles.font_size_b + ' ' + styles.laybox_pad_a}>机打发票</a>
            </div>

            <label className={styles.regs_box}><span className={styles.font_size_b + ' ' + styles.wid21 + ' ' + styles.checkbox_txt}>开票项目</span></label>
            <div className={styles.b_lay_box}>
                <a href="javascript:void(0)" className={styles.b_lay_box_active + ' ' + styles.font_size_b + ' ' + styles.laybox_pad_a}>工艺品</a><a href="javascript:void(0)" className={styles.font_size_b + ' ' + styles.laybox_pad_a}>明细</a><a href="javascript:void(0)" className={styles.font_size_b + ' ' + styles.laybox_pad_a}>办公用品</a>
            </div>
            <label className={styles.regs_box}><span className={styles.font_size_b + ' ' + styles.checkbox_txt}>发票抬头：</span>
                <label className={styles.checkBOx + ' ' + styles.size_rem1}>
                    <input className={styles.checkbox_in} checked="true" type="checkbox"/>
                    <i className={styles.on}><b></b></i>
                    <span>个人</span>
                </label>
                <label className={styles.checkBOx + ' ' + styles.size_rem1}>
                    <input className={styles.checkbox_in} checked="true" type="checkbox"/>
                    <i className={styles.on + ' ' + styles.off}><b></b></i>
                    <span>企业</span>
                </label>
            </label>
            <label className={styles.regs_box}><span className={styles.font_size_b + ' ' + styles.checkbox_txt}>发票名头：</span><span className={styles.inp_a + ' ' + styles.fp_area + ' ' + styles.checkbox_txt}><textarea rows="2" cols="40"></textarea></span></label>
        </form>
    </menu>
    <footer id="index_footer">
        <menu>
            <nav>
                <center>
                    <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.font_size_b + ' ' + styles.sh_save + ' ' + styles.sh_save_wd}>保存</a>
                </center>
            </nav>
        </menu>
    </footer>
    </div>
    );
  }
}
