import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class DingdanXiangqing extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/grzx', text: '个人中心'}, {liclasses: '', ahref: '', text: '详情'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    console.log(styles.grzx_xq_white_back)
    return(
  		<menu className={styles.all_wap + ' ' + styles.background_color}>
          <div className={styles.grzx_xq_back}>
              <div className={styles.sp}>
                <img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/>
              </div>
              <div className={styles.txt}>
                  <h3 className={styles.font_size_b}>【 虞美人 】  沉香木梳  </h3>
                  <h3 className={styles.color + ' ' + styles.font_size_c}>¥ 900.00</h3>
              </div>
          </div>
          <div className={styles.grzx_xq_white_back}>
              <img src="http://www.goto720.com/ypapp/img/grzx_xq_bg1.jpg" alt="" className={styles.title}/>
              <div className={styles.neir}>
                  <h3 className={styles.font_size_a}>包装费：<em>¥200.00</em></h3>
                  <h4 className={styles.font_size_a}>豪华包装</h4>
                  <div className={styles.clear}></div>
                  <h3 className={styles.font_size_a}>服务费：<em>¥00.00</em></h3>
                  <h4 className={styles.font_size_a}>高档礼盒</h4>
                  <div className={styles.clear}></div>
                  <h3 className={styles.font_size_a}>定制费：<em>¥00.00</em></h3>
                  <h4 className={styles.font_size_a}>红色</h4>
              </div>
          </div>
          <a href="#!/shdz" className={styles.grzx_xq_white_back}>
              <img src="http://www.goto720.com/ypapp/img/grzx_xq_bg2.jpg" alt="" className={styles.title}/>
              <div className={styles.xinxi}>
                  <h3 className={styles.font_size_a}>收货人：埃尔法</h3>
                  <h3 className={styles.pad + ' ' + styles.font_size_a}>电话：13148975333</h3>
                  <h4 className={styles.font_size_a}>吉林省长春市  朝阳区南湖大路与辉南街交汇天
                      宝图文楼上浩维数字研究所</h4>
              </div>
          </a>
          <a href="#!/grzx_wlgz" className={styles.grzx_xq_white_back}>
              <img src="http://www.goto720.com/ypapp/img/grzx_xq_bg3.jpg" alt="" className={styles.title}/>
              <div className={styles.wuliu}>
                  <h3 className={styles.font_size_a}>订单号：54587257128715814558</h3>
                  <h4 className={styles.font_size_a}>您的订单已到达第三方库房，准备出库</h4>
                  <h5 className={styles.font_size_a}>2016-02-02  14:22:22</h5>
              </div>
              <img src="http://www.goto720.com/ypapp/img/xq_right.png" alt="" className={styles.wuliu_next}/>
          </a>
          <div className={styles.grzx_end + ' ' + styles.font_size_c}><span>合计：</span><em>¥ 1000.00</em></div>
      </menu>
    );
  }
}
