import React, { Component } from 'react';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class GongDingzhi extends Component {
  constructor() {
    super();
    this.state = {
    	caizhiSrc: 'http://www.goto720.com/ypapp/img/gdz_dz_icon.png',
    	tuanSrc: 'http://www.goto720.com/ypapp/img/gdz_dz_icon1.png',
    	caizhiColor: '#fff',
    	tuanColor: '#fff'
    }

  }
  componentWillMount(){
    
  }

  changeClass(e) {
  	const tag = e.target.getAttribute('data-tag');
  	switch(tag){
  		case 'caizhi':
  			this.setState({
  				caizhiSrc: 'http://www.goto720.com/ypapp/img/gdz_dz_icon_hover.png',
  				tuanSrc: 'http://www.goto720.com/ypapp/img/gdz_dz_icon1.png',
  				caizhiColor: '#ff0000',
  				tuanColor: '#fff'
  			});
  			this.refs.caizhi_select.style.display = 'block';
			this.refs.tuan_select.style.display = 'none';
  			break;
  		case 'tuan':
  			this.setState({
  				caizhiSrc: 'http://www.goto720.com/ypapp/img/gdz_dz_icon.png',
  				tuanSrc: 'http://www.goto720.com/ypapp/img/gdz_dz_icon1_hover.png',
  				caizhiColor: '#fff',
  				tuanColor: '#ff0000'
  			});
  			this.refs.caizhi_select.style.display = 'none';
			this.refs.tuan_select.style.display = 'block';
  			break;
  		default: 
  			break;

  	}
  	e.stopPropagation();
    e.preventDefault();
  }
  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/gdz_two', text: '工 • 定制'}, {liclasses: '', ahref: '', text: '定制'}]);
  	document.querySelector('ul li').addEventListener('touchend', function(e){
	    console.log(this);
	 	e.stopPropagation();
	    e.preventDefault();
  	});
  }

  render() {
  	const styles = require('./CustomMade.scss');
    return(
    	<menu className={styles.gdz_bz + ' ' + styles.background_color}>
		    <img src="http://www.goto720.com/ypapp/photo/g12.jpg" alt="" className={styles.banner}/>
		    <div className={styles.gdz_dz}>
		        <div data-tag='caizhi' className={styles.tiled} onTouchEnd={this.changeClass.bind(this)}>
		            <i data-tag='caizhi' className={styles.icon}><img src={this.state.caizhiSrc} alt=""/></i>
		            <span data-tag='caizhi' style={{color:this.state.caizhiColor}} className={styles.txt}>材质</span>
		        </div>
		        <div data-tag='tuan' className={styles.tiled + ' ' + styles.ml} onTouchEnd={this.changeClass.bind(this)}>
		            <i data-tag='tuan' className={styles.icon}><img src={this.state.tuanSrc} alt=""/></i>
		            <span data-tag='tuan' style={{color:this.state.tuanColor}} className={styles.txt}>图案</span>
		        </div>
		        <section>
		            <ul className={styles.gdz_xuanz + ' ' + styles.dis} ref="caizhi_select">
		                <li className={styles.active}>
		                    <div className={styles.pictu}><img src="http://www.goto720.com/ypapp/photo/g66.jpg" alt=""/></div>
		                    <p className={styles.txt}>玉</p>
		                </li>
		                <li>
		                    <div className={styles.pictu}><img src="http://www.goto720.com/ypapp/photo/g67.jpg" alt=""/></div>
		                    <p className={styles.txt}>琥珀</p>
		                </li>
		                <li className={styles.mr0}>
		                    <div className={styles.pictu}><img src="http://www.goto720.com/ypapp/photo/g68.jpg" alt=""/></div>
		                    <p className={styles.txt}>羊脂</p>
		                </li>
		            </ul>
		            <ul className={styles.gdz_xuanz + ' ' + styles.dis} ref="tuan_select">
		                <li className={styles.active}>
		                    <div className={styles.pictu}><img src="http://www.goto720.com/ypapp/photo/g66.jpg" alt=""/></div>
		                    <p className={styles.txt}>玉11</p>
		                </li>
		                <li>
		                    <div className={styles.pictu}><img src="http://www.goto720.com/ypapp/photo/g67.jpg" alt=""/></div>
		                    <p className={styles.txt}>琥珀</p>
		                </li>
		                <li className={styles.mr0}>
		                    <div className={styles.pictu}><img src="http://www.goto720.com/ypapp/photo/g68.jpg" alt=""/></div>
		                    <p className={styles.txt}>羊脂</p>
		                </li>
		            </ul>
		        </section>
		        <div className={styles.clear}></div>
		        <article>
		            <section className={styles.gdz_dz_sel_title_mt + ' ' + styles.gdz_dz_sel_box_dis}>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>图案</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		                <div className={styles.clear}></div>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>设计师</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		            </section>
		            <section className={styles.gdz_dz_sel_title_mt + ' ' + styles.gdz_dz_sel_box_dis}>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>图案2</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		                <div className={styles.clear}></div>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>设计师</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		            </section>
		            <section className={styles.gdz_dz_sel_title_mt + ' ' + styles.gdz_dz_sel_box_dis}>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>图案3</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		                <div className={styles.clear}></div>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>设计师</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		            </section>
		            <section className={styles.gdz_dz_sel_title_mt + ' ' + styles.gdz_dz_sel_box_dis}>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>图案4</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		                <div className={styles.clear}></div>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>设计师</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		            </section>
		            <section className={styles.gdz_dz_sel_title_mt + ' ' + styles.gdz_dz_sel_box_dis}>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>图案5</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		                <div className={styles.clear}></div>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>设计师</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		            </section>
		            <section className={styles.gdz_dz_sel_title_mt + ' ' + styles.gdz_dz_sel_box_dis}>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>图案6</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		                <div className={styles.clear}></div>
		                <div className={styles.gdz_dz_sel_title}>
		                    <div className={styles.link}></div>
		                    <div className={styles.txt + ' ' + styles.font_size_b}>设计师</div>
		                    <div className={styles.link + ' ' +  styles.fr}></div>
		                </div>
		                <ul className={styles.gdz_dz_sel_box}>
		                    <li className={styles.active}>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g69.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                    <li>
		                        <img src="http://www.goto720.com/ypapp/photo/g70.jpg" alt=""/>
		                        <i className={styles.icon}></i>
		                    </li>
		                </ul>
		                <a href="" className={styles.gdz_dz_sel_add}><img src="http://www.goto720.com/ypapp/img/dz_zd.jpg" alt=""/></a>
		            </section>
		        </article>
		    </div>
		    <div className={styles.clear}></div>
		    <div className={styles.alw}>
		        <div className={styles.al_left}><img src="http://www.goto720.com/ypapp/photo/g38.jpg" alt=""/></div>
		        <div className={styles.al_right}>
		            <div className={styles.dz_h1 + ' ' + styles.font_size_a}><span className={styles.txt}>定制方案：</span><span>按材料定制</span></div>
		            <div className={styles.dz_h1 + ' ' + styles.font_size_a}><span className={styles.txt}>材料：</span><span>糖色玉胭脂</span></div>
		            <div className={styles.dz_h1 + ' ' + styles.font_size_a}><span className={styles.txt}>参数：</span><span>22*22*22</span></div>
		            <div className={styles.cen_link}></div>
		            <div className={styles.dz_h1 + ' ' + styles.font_size_a}><span className={styles.txt + ' ' + styles.float}>客户意见：</span><span className={styles.zenw + ' ' + styles.float}>工艺品表层光滑颜色纯正，需要恰当的纹理宽高正</span></div>
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
		    <p className={styles.gdz_all_money + ' ' + styles.font_size_b}>RAM：¥4,800.00</p>
		    <div className={styles.clear}></div>
		</menu>
    );
  }
}
