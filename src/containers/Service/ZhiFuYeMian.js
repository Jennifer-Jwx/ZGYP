import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class XinZengShouQuan extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/wr_js_jsuan', text: '结算'}, {liclasses: '', ahref: '', text: '支付页面'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
       <menu className={styles.regs}>
          <div className={styles.regs_fy}>
              <em className={styles.font_size_c} style={{'pading-top': '1rem'}}>待支付金额：  10000.00</em>
              <ul className={styles.zhifu_a}>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span><img src="http://www.goto720.com/ypapp/photo/r3.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span><img src="http://www.goto720.com/ypapp/photo/r4.png" alt=""/></span></a></li>
              </ul>
              <h2 className={styles.font_size_c}>网上支付</h2>
              <ul className={styles.zhifu_b}>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a1}><img src="http://www.goto720.com/ypapp/photo/r5.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a2}><img src="http://www.goto720.com/ypapp/photo/r6.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a2}><img src="http://www.goto720.com/ypapp/photo/r7.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a3}><img src="http://www.goto720.com/ypapp/photo/r8.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a4}><img src="http://www.goto720.com/ypapp/photo/r9.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a4}><img src="http://www.goto720.com/ypapp/photo/r10.png" alt=""/></span></a></li>
                  <li><a href="javascript:void(0)"><i className={styles.all_radio}></i><span className={styles.a4}><img src="http://www.goto720.com/ypapp/photo/r11.png" alt=""/></span></a></li>
                  <li className={styles.bg}><a href="javascript:void(0)"><span className={styles.font_size_c}>更多网上银行</span><img src="http://www.goto720.com/ypapp/img/reg_left.png" alt="" className={styles.img}/></a></li>
              </ul>

          </div>
      </menu>
        <footer id="index_footer">
          <menu>
            <nav>
              <center>
                  <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.font_size_b + ' ' + styles.sh_save + ' ' + styles.sh_save_wd}>立即支付</a>
              </center>
            </nav>
          </menu>
        </footer>
    </div>
    );
  }
}
