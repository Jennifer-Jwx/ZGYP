import React, { Component } from 'react';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class GongDingzhiFuwu extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }
  
  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/gdz_two', text: '工 • 定制'}, {liclasses: '', ahref: '', text: '服务'}]);
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
    return(
    	<menu className={styles.background_color + ' ' + styles.gdz_baoz + ' ' + styles.padding_bottom}>
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
		    <ul onTouchEnd={this.toggleContent.bind(this)} className={styles.all_tiaomu}>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/fw_bg1.jpg" alt=""/>
		            <section>
		                <ul className={styles.regs_xz}>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 99.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>

		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 111.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 221.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                </ul>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/fw_bg2.jpg" alt=""/>
		            <section>
		                <ul className={styles.regs_xz}>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 99.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>

		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 111.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 221.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                </ul>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/fw_bg3.jpg" alt=""/>
		            <section>
		                <ul className={styles.regs_xz}>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 99.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>

		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 111.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 221.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                </ul>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/fw_bg4.jpg" alt=""/>
		            <section>
		                <ul className={styles.regs_xz}>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 99.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>

		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 111.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 221.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                </ul>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/fw_bg5.jpg" alt=""/>
		            <section>
		                <ul className={styles.regs_xz}>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 99.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>

		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 111.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                    <li>
		                        <a href="javascript:void(0)">
		                            <i className={styles.all_radio + ' ' + styles.poa}></i>
		                            <p><span className={styles.span_b}>¥ 221.00</span><span>一年延保服务</span></p>
		                            <span className={styles.font_size_b + ' ' + styles.span_a}>服务对象: 1、个人用户: (1)可免费注册登录易学网;(2)可对易学网的机构、课程、资讯等发表评论;</span>
		                        </a>
		                    </li>
		                </ul>
		            </section>
		        </li>
		    </ul>
		</menu>
    );
  }
}
