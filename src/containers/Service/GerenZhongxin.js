import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class GerenZhongxin extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '', text: '个人中心'}]);
  }

  render() {
  	const styles = require('./Service.scss');
  	const _this = this;
    return(
  		<menu className={styles.grzx_wap} >
        <div className={styles.grzx_head_wap} >
            <div className={styles.head_icon}><img src="http://www.goto720.com/ypapp/photo/zx1.jpg" alt=""/></div>
            <p className={styles.head_name + ' ' + styles.font_size_b}>用户名：***</p>
        </div>
        <ul className={styles.grzx_nav}>
            <li><a href="#!/grzx_dingdan"><img src="http://www.goto720.com/ypapp/img/grzx_nav1.jpg" alt=""/></a></li>
            <li><a href="#!/grzx_zl"><img src="http://www.goto720.com/ypapp/img/grzx_nav2.jpg" alt=""/></a></li>
            <li><a href="#!/grzx_goumai"><img src="http://www.goto720.com/ypapp/img/grzx_nav3.jpg" alt=""/></a></li>
            <li><a href="#!/grzx_gz"><img src="http://www.goto720.com/ypapp/img/grzx_nav4.jpg" alt=""/></a></li>
            <li><a href="#!/grzx_sz"><img src="http://www.goto720.com/ypapp/img/grzx_nav5.jpg" alt=""/></a></li>
            <div className={styles.clear}></div>
        </ul>
      </menu>
    );
  }
}
