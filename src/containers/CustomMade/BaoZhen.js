import React, { Component } from 'react';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class BaoZhen extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/gdz_two', text: '工 • 定制'}, {liclasses: '', ahref: '', text: '保真'}]);
  	const _this = this;
  	document.addEventListener('touchmove', function(e){
  		_this.moveFlag = true;
  	});
  	document.addEventListener('touchstart', function(e){
  		_this.moveFlag = false;
  	});
  }

  toggleContent(e){
  	if(e.target.getAttribute('data-tag') == 'js_trigger_nav' && !this.moveFlag){
  		const item = e.target.nextSibling;
  		const _height = item.style.height == 'auto' ? 0 : 'auto';

  		item.style.height = _height;
  	}
  }



  render() {
  	const styles = require('./CustomMade.scss');
  	const _this = this;
    return(
    	<menu className={styles.gdz_baoz + ' ' + styles.background_color + ' ' + styles.padding_bottom}>
		    <section className={styles.card}>
		        <div className={styles.touxiang}><img src="http://www.goto720.com/ypapp/photo/g32.png" alt=""/></div>
		        <div className={styles.ziliao}>
		            <h4 className={styles.font_size_b}>设计师：黄晓明 </h4>
		            <div className={styles.link}></div>
		            <h4 className={styles.font_size_b + ' ' + styles.pt5}>潇湘工艺品店 2016-03-05 售出</h4>
		            <h3><span className={styles.font_size_b}>持有人  ：</span><span className={styles.font_size_b + ' ' + styles.span_a}>李**</span><a href="" className={styles.font_size_b + ' ' + styles.font_color}>联系持有人</a></h3>
		            <div className={styles.link}></div>
		            <h4 className={styles.font_size_b + ' ' + styles.pt5}><span>诞生时间：</span><span className={styles.span_a}>2016-01-25</span></h4>
		            <h4 className={styles.font_size_b}><span>诞生时间：</span><span className={styles.span_a}>2016-01-25</span></h4>
		            <h4 className={styles.font_size_b}><span>诞生时间：</span><span className={styles.span_a}>2016-01-25</span></h4>
		        </div>
		        <div className={styles.clear}></div>
		        <div className={styles.alink}></div>
		        <img src="http://www.goto720.com/ypapp/photo/g33.jpg" alt="" className={styles.img_ma}/>
		    </section>
		    <ul className={styles.all_tiaomu} onTouchEnd={this.toggleContent.bind(this)}>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/baoz_bg1.jpg" alt=""/>
		            <section className={styles.gdz_zs_box}>
		                <ul className={styles.left}>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>设计师</span><span className={styles.font_size_b + ' ' + styles.span_b}>黄晓明</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>艺品名称</span><span className={styles.font_size_b + ' ' + styles.span_c}>北大宝石鉴定中心</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证机构</span><span className={styles.font_size_b + ' ' + styles.span_c}>AG111000029</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>编号</span><span className={styles.font_size_b + ' ' + styles.span_d}>WFJF039</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>申请人</span><span className={styles.font_size_b + ' ' + styles.span_b}>中国艺品网</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证日期</span><span className={styles.font_size_b + ' ' + styles.span_c}>2016-01-28</span></li>
		                </ul>
		                <div className={styles.right}><img src="http://www.goto720.com/ypapp/photo/g34.jpg" alt=""/></div>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/baoz_bg2.jpg" alt=""/>
		            <section className={styles.gdz_zs_box}>
		                <ul className={styles.left}>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>设计师</span><span className={styles.font_size_b + ' ' +  styles.span_b}>黄晓明</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>艺品名称</span><span className={styles.font_size_b + ' ' +  styles.span_c}>北大宝石鉴定中心</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证机构</span><span className={styles.font_size_b + ' ' +  styles.span_c}>AG111000029</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>编号</span><span className={styles.font_size_b + ' ' +  styles.span_d}>WFJF039</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>申请人</span><span className={styles.font_size_b + ' ' +  styles.span_b}>中国艺品网</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证日期</span><span className={styles.font_size_b + ' ' +  styles.span_c}>2016-01-28</span></li>
		                </ul>
		                <div className={styles.right}><img src="http://www.goto720.com/ypapp/photo/g35.jpg" alt=""/></div>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/baoz_bg3.jpg" alt=""/>
		            <section className={styles.gdz_zs_box}>
		                <ul className={styles.left}>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>设计师</span><span className={styles.font_size_b + ' ' + styles.span_b}>黄晓明</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>艺品名称</span><span className={styles.font_size_b + ' ' + styles.span_c}>北大宝石鉴定中心</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证机构</span><span className={styles.font_size_b + ' ' + styles.span_c}>AG111000029</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>编号</span><span className={styles.font_size_b + ' ' + styles.span_d}>WFJF039</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>申请人</span><span className={styles.font_size_b + ' ' + styles.span_b}>中国艺品网</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证日期</span><span className={styles.font_size_b + ' ' + styles.span_c}>2016-01-28</span></li>
		                </ul>
		                <div className={styles.right}><img src="http://www.goto720.com/ypapp/photo/g36.jpg" alt=""/></div>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/baoz_bg4.jpg" alt=""/>
		            <section className={styles.gdz_zs_box}>
		                <ul className={styles.left}>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>设计师</span><span className={styles.font_size_b + ' ' + styles.span_b}>黄晓明</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>艺品名称</span><span className={styles.font_size_b + ' ' + styles.span_c}>北大宝石鉴定中心</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证机构</span><span className={styles.font_size_b + ' ' + styles.span_c}>AG111000029</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>编号</span><span className={styles.font_size_b + ' ' + styles.span_d}>WFJF039</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>申请人</span><span className={styles.font_size_b + ' ' + styles.span_b}>中国艺品网</span></li>
		                    <li><span className={styles.span_a + ' ' + styles.font_size_b}>认证日期</span><span className={styles.font_size_b + ' ' + styles.span_c}>2016-01-28</span></li>
		                </ul>
		                <div className={styles.right}><img src="http://www.goto720.com/ypapp/photo/g37.jpg" alt=""/></div>
		            </section>
		        </li>
		        <div className={styles.clear}></div>
		    </ul>
		</menu>
    );
  }
}
