import React, { Component } from 'react';
import {Round} from 'components';
import eventProxy from '../../utils/eventProxy';

export default class HangYeTouTiao extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '', text: '术 • 百科'}, , {liclasses: '', ahref: '', text: '行业头条'}]);
  }

  render() {
  	const styles = require('./ShuBaike.scss');
    return(
    	<article className={styles.background_color + ' ' + styles.padding_top}>
		    <Round ifdots='1'/>
		    {/* 最外层容器*/}
		    <div className={styles.sbk_out_box}>
		        {/* 行业头条*/}
		        <div className={styles.sbk_HangYe}>
		            <div className={styles.HangYe_top}><img src="http://www.goto720.com/ypapp/img/sbk_img1.jpg" alt=""/></div>
		            <div className={styles.HangYe_box}>
		                <a href="#!/wr_sbk_hytt" className={styles.HangYe_left}>
		                    <img src="http://www.goto720.com/ypapp/photo/sbk1.jpg" alt=""/>
		                    <div className={styles.HangYe_text}><h5>疯狂的雕刻<br/>造出具有一定空间的可......</h5></div>
		                </a>
		                <ul className={styles.HangYe_right}>
		                    <li className={styles.HangYe_li1}>
		                        <a href="#!/wr_sbk_hytt">
		                            <img src="http://www.goto720.com/ypapp/photo/sbk2.jpg" alt=""/>
		                            <div className={styles.HangYe_text}><h5>陶瓷世界<br/>造出具有一定空间的可......</h5></div>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="#!/wr_sbk_hytt">
		                            <img src="http://www.goto720.com/ypapp/photo/sbk3.jpg" alt=""/>
		                            <div className={styles.HangYe_text}><h5>陶瓷世界<br/>造出具有一定空间的可......</h5></div>
		                        </a>
		                    </li>
		                </ul>

                		<div className={styles.clear}></div>
		                <a href="#!/wr_sbk_hytt" className={styles.HangYe_left + ' ' + styles.Hang_center}>
		                    <img src="http://www.goto720.com/ypapp/photo/sbk15.jpg" alt=""/>
		                    <div className={styles.HangYe_text}><h5>疯狂的雕刻<br/>造出具有一定空间的可......</h5></div>
		                </a>
		            </div>
		            <div className={styles.clear}></div>
		            {/* 按钮（加号）*/}
		            <a href="#!/wr_sbk_hytt2" className={styles.HangYe_icon}>
		                <i className={styles.icon_heng}></i>
		                <i className={styles.icon_shu}></i>
		            </a>
		        </div>
		    </div>
		</article>
    );
  }
}
