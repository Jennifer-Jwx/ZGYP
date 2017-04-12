import React, { Component } from 'react';
import {Round} from 'components';
import eventProxy from '../../utils/eventProxy';

export default class ShuBaike extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '', text: '术 • 百科'}]);
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
		            </div>
		            {/* 按钮（加号）*/}
		            <a href="#!/wr_sbk_hytt2" className={styles.HangYe_icon}>
		                <i className={styles.icon_heng}></i>
		                <i className={styles.icon_shu}></i>
		            </a>
		        </div>
		        {/* 工美百科*/}
		        <div className={styles.clear}></div>
		        <div className={styles.sbk_HangYe}>
		            <div className={styles.HangYe_top}><img src="http://www.goto720.com/ypapp/img/sbk_img2.jpg" alt=""/></div>
		            <div className={styles.HangYe_box}>
		                <a href="#!/sbk_gmbk_xx" className={styles.HangYe_left}>
		                    <img src="http://www.goto720.com/ypapp/photo/sbk4.jpg" alt=""/>
		                    <div className={styles.HangYe_text}><h5>疯狂的雕刻<br/>造出具有一定空间的可......</h5></div>
		                </a>
		                <ul className={styles.HangYe_right}>
		                    <li className={styles.HangYe_li1}>
		                        <a href="#!/sbk_gmbk_xx">
		                            <img src="http://www.goto720.com/ypapp/photo/sbk5.jpg" alt=""/>
		                            <div className={styles.HangYe_text}><h5>陶瓷世界<br/>造出具有一定空间的可......</h5></div>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="#!/sbk_gmbk_xx">
		                            <img src="http://www.goto720.com/ypapp/photo/sbk6.jpg" alt=""/>
		                            <div className={styles.HangYe_text}><h5>陶瓷世界<br/>造出具有一定空间的可......</h5></div>
		                        </a>
		                    </li>
		                </ul>
		            </div>
		            {/* 按钮（加号）*/}
		            <a href="#!/sbk_gmbk_two" className={styles.HangYe_icon}>
		                <i className={styles.icon_heng}></i>
		                <i className={styles.icon_shu}></i>
		            </a>
		        </div>
		        {/* 工美空间*/}
		        <div className={styles.clear}></div>
		        <div className={styles.sbk_HangYe}>
		            <div className={styles.HangYe_top + ' ' + styles.pb}><img src="http://www.goto720.com/ypapp/img/sbk_img3.jpg" alt=""/></div>
		            <div className={styles.HangYe_box}>
		                <ul className={styles.HangYe_right + ' ' + styles.float}>
		                    <li className={styles.HangYe_li1}>
		                        <a href="#!/sbk_space_people2">
		                            <img src="http://www.goto720.com/ypapp/img/sbk_first_kj_bg1.jpg" alt="" className={styles.img_kj}/>
		                            <div className={styles.HangYe_text + ' ' + styles.img_wid}><img src="http://www.goto720.com/ypapp/img/sbk_img8.png" alt=""/></div>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="#!/sbk_space_people2">
		                            <img src="http://www.goto720.com/ypapp/img/sbk_first_kj_bg2.jpg" alt="" className={styles.img_kj}/>
		                            <div className={styles.HangYe_text + ' ' + styles.img_wid}><img src="http://www.goto720.com/ypapp/img/sbk_img9.png" alt=""/></div>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="#!/sbk_space_people2">
		                            <img src="http://www.goto720.com/ypapp/img/sbk_first_kj_bg3.jpg" alt="" className={styles.img_kj}/>
		                            <div className={styles.HangYe_text + ' ' + styles.img_wid}><img src="http://www.goto720.com/ypapp/img/sbk_img10.png" alt=""/></div>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="#!/sbk_space_people2">
		                            <img src="http://www.goto720.com/ypapp/img/sbk_first_kj_bg4.jpg" alt="" className={styles.img_kj}/>
		                            <div className={styles.HangYe_text + ' ' + styles.img_wid}><img src="http://www.goto720.com/ypapp/img/sbk_img11.png" alt=""/></div>
		                        </a>
		                    </li>
		                </ul>
		            </div>
		            {/* 按钮（加号）*/}
		            <a href="#!/sbk_gmkj_ds_two" className={styles.HangYe_icon}>
		                <i className={styles.icon_heng}></i>
		                <i className={styles.icon_shu}></i>
		            </a>
		        </div>
		        {/* 排行榜*/}
		        <div className={styles.clear}></div>
		    </div>
		</article>
    );
  }
}
