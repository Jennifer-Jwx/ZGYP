import React, { Component } from 'react';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class BaoZhuang extends Component {
  constructor() {
    super();
    this.state = {
    }

  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/gdz_two', text: '工 • 定制'}, {liclasses: '', ahref: '', text: '包装'}]);
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
    	<menu className={styles.gdz_bz + ' ' +  styles.background_color}>
		    <img src="http://www.goto720.com/ypapp/photo/g12.jpg" alt="" className={styles.banner}/>
		    <ul onTouchEnd={this.toggleContent.bind(this)} className={styles.all_tiaomu + ' ' + styles.tiaomu}>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/bz_bg1.jpg" alt=""/>
		            <section>
		                <div className={styles.title}>
		                    <h3 className={styles.font_size_b}>材质</h3>
		                    <em className={styles.font_size_b}>¥13,000</em>
		                </div>
		                <ul className={styles.change}>
		                    <li className={styles.active}><img src="http://www.goto720.com/ypapp/photo/g13.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g14.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g15.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g16.jpg" alt=""/></li>
		                </ul>
		                <div className={styles.clear}></div>
		                <div className={styles.title}>
		                    <h3 className={styles.font_size_b}>形状</h3>
		                    <em className={styles.font_size_b}>¥13,000</em>
		                </div>
		                <ul className={styles.change}>
		                    <li className={styles.active}><img src="http://www.goto720.com/ypapp/photo/g17.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g18.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g19.jpg" alt=""/></li>
		                </ul>
		                <div className={styles.clear}></div>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/bz_bg2.jpg" alt=""/>
		            <section>
		                <div className={styles.title}>
		                    <h3 className={styles.font_size_b}>形状</h3>
		                    <em className={styles.font_size_b}>¥13,000</em>
		                </div>
		                <ul className={styles.change}>
		                    <li className={styles.active}><img src="http://www.goto720.com/ypapp/photo/g20.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g21.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g22.jpg" alt=""/></li>
		                </ul>
		                <div className={styles.clear}></div>
		                <div className={styles.title}>
		                    <h3 className={styles.font_size_b}>颜色</h3>
		                    <em className={styles.font_size_b}>¥13,000</em>
		                </div>
		                <ul className={styles.change}>
		                    <li className={styles.active}><img src="http://www.goto720.com/ypapp/photo/g23.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g24.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g25.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g26.jpg" alt=""/></li>
		                </ul>
		                <div className={styles.clear}></div>
		            </section>
		        </li>
		        <li>
		            <img data-tag='js_trigger_nav' src="http://www.goto720.com/ypapp/img/bz_bg3.jpg" alt=""/>
		            <section>
		                <div className={styles.title}>
		                    <h3 className={styles.font_size_b}>颜色</h3>
		                    <em className={styles.font_size_b}>¥13,000</em>
		                </div>
		                <ul className={styles.change}>
		                    <li className={styles.active}><img src="http://www.goto720.com/ypapp/photo/g27.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g28.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g29.jpg" alt=""/></li>
		                </ul>
		                <div className={styles.clear}></div>
		                <div className={styles.title}>
		                    <h3 className={styles.font_size_b}>颜色</h3>
		                    <em className={styles.font_size_b}>¥13,000</em>
		                </div>
		                <ul className={styles.change}>
		                    <li className={styles.active}><img src="http://www.goto720.com/ypapp/photo/g23.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g24.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g25.jpg" alt=""/></li>
		                    <li><img src="http://www.goto720.com/ypapp/photo/g26.jpg" alt=""/></li>
		                </ul>
		                <div className={styles.clear}></div>
		                <div className={styles.text}>
		                    <h3 className={styles.font_size_b}>自定义</h3>
		                    <textarea name="" id="" className={styles.textarea + ' ' + styles.font_size_b}>请输入寄语</textarea>
		                    <p className={styles.title + ' ' + styles.font_size_b}>0  /200字</p>
		                    <div className={styles.clear}></div>
		                    <a href="" className={styles.all_button + ' ' + styles.butn}>上传</a>
		                </div>
		                <div className={styles.clear}></div>
		            </section>
		        </li>
		    </ul>
		    <div className={styles.clear}></div>
		    <div className={styles.alw}>
		        <div className={styles.al_left}><img src="http://www.goto720.com/ypapp/photo/g30.png" alt=""/></div>
		        <div className={styles.al_right}>
		            <span className={styles.jix + ' ' + styles.font_size_b}>寄语：</span>
		            <span className={styles.jix_a + ' ' + styles.font_size_b}>预祝朋友身体健康，万事如意</span>
		            <span className={styles.minz + ' ' + styles.font_size_b}>张霞</span>
		        </div>
		        <div className={styles.clear}></div>
		        <ul className={styles.shanc}>
		            <li>
		                <div className={styles.tu}>
		                    <img src="http://www.goto720.com/ypapp/photo/g31.png" alt="" className={styles.img_a}/>
		                    <img src="http://www.goto720.com/ypapp/img/bz_delt.png" alt="" className={styles.img_b}/>
		                </div>
		                <div className={styles.wenz}>
		                    <h4 className={styles.font_size_b}>木纹底座</h4>
		                    <em className={styles.font_size_b}>¥ 4，500</em>
		                </div>
		            </li>
		            <li>
		                <div className={styles.tu}>
		                    <img src="http://www.goto720.com/ypapp/photo/g31.png" alt="" className={styles.img_a}/>
		                    <img src="http://www.goto720.com/ypapp/img/bz_delt.png" alt="" className={styles.img_b}/>
		                </div>
		                <div className={styles.wenz}>
		                    <h4 className={styles.font_size_b}>木纹底座</h4>
		                    <em className={styles.font_size_b}>¥ 4，500</em>
		                </div>
		            </li>
		            <li>
		                <div className={styles.tu}>
		                    <img src="http://www.goto720.com/ypapp/photo/g31.png" alt="" className={styles.img_a}/>
		                    <img src="http://www.goto720.com/ypapp/img/bz_delt.png" alt="" className={styles.img_b}/>
		                </div>
		                <div className={styles.wenz}>
		                    <h4 className={styles.font_size_b}>木纹底座</h4>
		                    <em className={styles.font_size_b}>¥ 4，500</em>
		                </div>
		            </li>
		            <li>
		                <div className={styles.tu}>
		                    <img src="http://www.goto720.com/ypapp/photo/g31.png" alt="" className={styles.img_a}/>
		                    <img src="http://www.goto720.com/ypapp/img/bz_delt.png" alt="" className={styles.img_b}/>
		                </div>
		                <div className={styles.wenz}>
		                    <h4 className={styles.font_size_b}>木纹底座</h4>
		                    <em className={styles.font_size_b}>¥ 4，500</em>
		                </div>
		            </li>
		            <li>
		                <div className={styles.tu}>
		                    <img src="http://www.goto720.com/ypapp/photo/g31.png" alt="" className={styles.img_a}/>
		                    <img src="http://www.goto720.com/ypapp/img/bz_delt.png" alt="" className={styles.img_b}/>
		                </div>
		                <div className={styles.wenz}>
		                    <h4 className={styles.font_size_b}>木纹底座</h4>
		                    <em className={styles.font_size_b}>¥ 4，500</em>
		                </div>
		            </li>
		            <div className={styles.clear}></div>
		        </ul>
		    </div>
		</menu>
    );
  }
}
