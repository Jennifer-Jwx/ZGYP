import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class TuiHuoShenQing extends Component {
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
                <img src="http://www.goto720.com/ypapp/img/grzx_sq_bg1.png" alt="" className={styles.sq_img} />
                <p className={styles.sq_txt + ' ' + styles.font_size_b}>您的申请已提交</p>
                <p className={styles.dan_num + ' ' + styles.font_size_b + ' ' + styles.pt_a + ' ' + styles.text}>认证码：545465656554886</p>
            </div>
            <div className={styles.clear}></div>
        </section>
        <a href="" className={styles.all_button + ' ' + styles.grzx_sq_leftbutn}>修改申请</a>
        <a href="" className={styles.all_button + ' ' + styles.grzx_sq_rightbutn}>取消申请</a>
        <div className={styles.clear}></div>
        <section className={styles.grzx_sq_txt}>
            <h3 className={styles.font_size_a}>售后类型：退货/退款</h3>
            <h3 className={styles.font_size_a}>退款金额：<em>¥300.000</em></h3>
            <h3 className={styles.font_size_a}>问题描述：（   到货物品损坏   颜色不准确色差严重   ）</h3>
            <h3 className={styles.font_size_a}>申请时间：2016-09-11</h3>
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
    </menu>
    );
  }
}
