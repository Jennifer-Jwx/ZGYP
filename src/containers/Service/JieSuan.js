import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class JieSuan extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '结算'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
       <article className={styles.service_fp}>
          <div className={styles.juan_nr}>
              <a href="#!/wr_js_ps" className={styles.xk_box}>
                  <img className={styles.xtb + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/ps.png" alt=""/>
                  <h1 className={styles.bti + ' ' + styles.zbs}>艺品配送</h1>
                  <img className={styles.djt + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/djt.png" alt=""/>
                  <img className={styles.jjt + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/jjt.png" alt=""/>
                  <ul className={styles.jsuan_txt + ' ' + styles.zbs}>
                      <ul className={styles.jsuan_txt_02}>
                          <li className={styles.txt_ybj}>收货人：埃尔法</li>
                          <li>电话：13148975333</li>
                      </ul>
                      <li>吉林省长春市  朝阳区南湖大路与辉南街......</li>
                      <li className={styles.txt_red}>( 顺丰速递 ¥20 ）</li>
                  </ul>
              </a>
              <a href="#!/wr_js_sq" className={styles.xk_box}>
                  <img className={styles.xtb + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/sq.png" alt=""/>
                  <h1 className={styles.bti + ' ' + styles.zbs}>艺品授权</h1>
                  <img className={styles.djt + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/djt.png" alt=""/>
                  <img className={styles.jjt + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/jjt.png" alt=""/>
                  <ul className={styles.jsuan_txt02 + ' ' + styles.zbs}>
                      <li>收货人：埃尔法</li>
                      <li>电话：13148975333</li>
                  </ul>
              </a>
              <a href="#!/wr_js_fp" className={styles.xk_box}>
                  <img className={styles.xtb + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/fpxx.png" alt=""/>
                  <h1 className={styles.bti + ' ' + styles.zbs}>发票信息</h1>
                  <img className={styles.djt + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/djt.png" alt=""/>
                  <img className={styles.jjt + ' ' + styles.zbs} src="http://www.goto720.com/ypapp/img/wr/jjt.png" alt=""/>
                  <ul className={styles.jsuan_txt + ' ' + styles.zbs}>
                      <ul className={styles.jsuan_txt_02}>
                          <li className={styles.txt_ybj}>发票类型：普通发票</li>
                          <li>开票项目：办公用品</li>
                      </ul>
                      <li>企业名称：长春吉大工易软件有限公司</li>
                      <li>发票抬头：个人</li>
                  </ul>
              </a>
              <p className={styles.spdh}>M00405700000000005943</p>
              <section className={styles.grzx_gm + ' ' + styles.padding_bottom + ' ' + styles.mag}>
                  <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
                  <div className={styles.cont_name}>
                      <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
                      <h1 className={styles.font_size_b + ' ' + styles.all_font_weight + ' ' + styles.pt}>单价：<em>¥ 900.00</em> </h1>
                      <h2 className={styles.font_size_a}>包装费：0.00</h2>
                      <h2 className={styles.font_size_a}>定制费：0.00</h2>
                      <h2 className={styles.font_size_a}>服务费：0.00</h2>
                      <h3 className={styles.font_size_b}>共计：<em>¥ 900.00</em></h3>
                  </div>
                  <div className={styles.clear}></div>
              </section>
              <p className={styles.spdh}>M00405700000000005943</p>
              <section className={styles.grzx_gm + ' ' + styles.padding_bottom + ' ' + styles.mag}>
                  <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
                  <div className={styles.cont_name}>
                      <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
                      <h1 className={styles.font_size_b + ' ' + styles.all_font_weight + ' ' + styles.pt}>单价：<em>¥ 900.00</em> </h1>
                      <h2 className={styles.font_size_a}>包装费：0.00</h2>
                      <h2 className={styles.font_size_a}>定制费：0.00</h2>
                      <h2 className={styles.font_size_a}>服务费：0.00</h2>
                      <h3 className={styles.font_size_b}>共计：<em>¥ 900.00</em></h3>
                  </div>
                  <div className={styles.clear}></div>
              </section>
          </div>
      </article>
        <footer id="index_footer">
          <menu>
            <nav>
              <center>
                  <p className={styles.sfk + ' ' + styles.txt_red + ' ' + styles.all_button_poa + ' ' + styles.all_button_poa_m}>实付款  ¥ 1800.00</p>
                  <a href="#!/zfym" className={styles.all_button02 + ' ' + styles.font_size_b + ' ' + styles.all_button_poa}>立即支付</a>
              </center>
            </nav>
          </menu>
        </footer>
    </div>
    );
  }
}
