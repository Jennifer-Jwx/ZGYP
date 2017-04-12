import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class FaPiao extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/wr_js_jsuan', text: '结算'}, {liclasses: '', ahref: '', text: '发票'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
       <article className={styles.service_fp + ' ' + styles.all_wap}>
            <div id="nr_box">
                <ul className={styles.fp_lb}>
                    <li className={styles.fp_lb01}>发票类型：普通发票　开票项目：办公用品</li>
                    <li>企业名称：长春吉大工易软件有限公司</li>
                    <li>发票抬头：个人</li>
                    <a href="#!/xzfp"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
                </ul>
                <ul className={styles.fp_lb}>
                    <li>发票类型：普通发票　开票项目：办公用品</li>
                    <li>企业名称：长春吉大工易软件有限公司</li>
                    <li>发票抬头：个人</li>
                    <a href="#!/xzfp"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
                </ul>
                <ul className={styles.fp_lb}>
                    <li>发票类型：普通发票　开票项目：办公用品</li>
                    <li>企业名称：长春吉大工易软件有限公司</li>
                    <li>发票抬头：个人</li>
                    <a href="#!/xzfp"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
                </ul>
            </div>
        </article>
        <footer id="index_footer">
          <menu>
            <nav>
              <center>
                  <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.font_size_b + ' ' + styles.sh_save + ' ' + styles.sh_save_wd}>新增发票</a>
              </center>
            </nav>
          </menu>
        </footer>
    </div>
    );
  }
}
