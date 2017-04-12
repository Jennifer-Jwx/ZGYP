import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class TuiHuo extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
    eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '', text: '退货'}]);
  }

  render() {
    const styles = require('./Service.scss');
    return(
    <menu className={styles.grzx_tuih_padding + ' ' + styles.background_color}>
      <section className={styles.grzx_gm}>
          <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
          <div className={styles.cont_name}>
              <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
              <h1 className={styles.font_size_b + ' ' + styles.all_font_weight + ' ' + styles.pt1}><em>¥ 900.00＋附加费（ 0 ）</em></h1>
              <p className={styles.dan_num + ' ' + styles.font_size_b + ' ' + styles.pt + ' ' + styles.pb}>单号：002153456425454</p>
              <a href="" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
          </div>
          <div className={styles.clear}></div>
      </section>
      <form action="">
          <label className={styles.regs_box + ' ' + styles.mt}>
              <span className={styles.font_size_b + ' ' + styles.tuih}>退/换货:</span>
              <ul className={styles.grzx_zl_radio}>
                  <li className={styles.mr}>
                      <i><b></b></i>
                      <p className={styles.font_size_b}>退货/退款</p>
                  </li>
                  <li className={styles.off}>
                      <i><b></b></i>
                      <p className={styles.font_size_b}>换货</p>
                  </li>
                  <input type="text" value="" className={styles.sub_val}/>
              </ul>
          </label>
      </form>
      <div className={styles.grzx_pl_txt}>
          <textarea name="" id="" className={styles.grzx_textarea} placeholder="问题描述：" ></textarea>
      </div>
      <section className={styles.grzx_tuih}>
          <ul className={styles.grzx_tuih_img}>
              <li><img src="http://www.goto720.com/ypapp/photo/zx3.jpg" alt=""/></li>
          </ul>
          <a href=""><img src="http://www.goto720.com/ypapp/img/tuih_img.png" alt="" className={styles.grzx_tuih_add_img}/></a>
      </section>
      <section>
          <div className={styles.grzx_tuih_xinxi}>
              <img src="http://www.goto720.com/ypapp/img/grzx_xq_bg2.jpg" alt="" className={styles.left}/>
              <div className={styles.right}>
                  <h1 className={styles.float + ' ' + styles.font_size_a}>收货人：埃尔法</h1>
                  <h1 className={styles.float + ' ' + styles.font_size_a + ' ' + styles.wid}>电话：13148975333</h1>
                  <div className={styles.clear}></div>
                  <h2 className={styles.font_size_a}>吉林省长春市  朝阳区南湖大路与辉南街......</h2>
                  <h2 className={styles.color + ' ' + styles.font_size_a}>（ 顺丰速递 ¥20 ）</h2>
              </div>
          </div>
          <div className={styles.grzx_tuih_xinxi}>
              <img src="http://www.goto720.com/ypapp/img/grzx_xq_bg4.jpg" alt="" className={styles.left}/>
              <div className={styles.right}>
                  <h1 className={styles.font_size_a + ' ' + styles.wid + ' ' + styles.mt}>收货人：埃尔法</h1>
                  <h1 className={styles.font_size_a + ' ' + styles.wid}>电话：13148975333</h1>
              </div>
          </div>
          <div className={styles.grzx_tuih_xinxi}>
              <img src="http://www.goto720.com/ypapp/img/grzx_xq_bg5.jpg" alt="" className={styles.left}/>
              <div className={styles.right}>
                  <h1 className={styles.float + ' ' + styles.font_size_a + ' ' + styles.wid_a}>发票类型：普通发票</h1>
                  <h1 className={styles.float + ' ' + styles.font_size_a + ' ' + styles.wid_a}>开票项目：办公用品</h1>
                  <div className={styles.clear}></div>
                  <h2 className={styles.font_size_a}>企业名称： 长春吉大工艺软件有限公司</h2>
                  <h2 className={styles.font_size_a}>发票抬头： 个人</h2>
              </div>
          </div>
      </section>
      <div className={styles.gdz_bottom + ' ' + styles.grzx_gm_bottom + ' ' + styles.pos_fixed + ' ' + styles.box_show}>
          <a href="#!/grzx_tuihuo_sq" className={styles.all_button + ' ' + styles.center_button + ' ' + styles.font_size_c}>提交</a>
      </div>
  </menu>
    );
  }
}
