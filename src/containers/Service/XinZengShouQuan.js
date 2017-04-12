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
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/wr_js_jsuan', text: '结算'}, {liclasses: '', ahref: '', text: '新增授权'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
        <menu className={styles.regs}>
          <form>
              <label className={styles.regs_box}><span className={styles.font_size_b + ' ' + styles.checkbox_txt}>授权人：</span><input type="text" className={styles.all_input}/></label>
              <label className={styles.regs_box}><span className={styles.font_size_b + ' ' + styles.checkbox_txt}>手机号码：</span><input type="text" className={styles.all_input}/></label>
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
