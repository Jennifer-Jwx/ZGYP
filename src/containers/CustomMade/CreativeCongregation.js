import React, { Component } from 'react';
import {Swiper, SortNav, GoodsList} from 'components';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class CreativeCongregation extends Component {
  constructor() {
    super();
    this.state = {
    	mfw_gdz_tishi: '',
    	gdz_shaixuan_classname: '',
    	gdz_classname: ''
    }

  }
  componentWillMount(){
    this.goodsList = [{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/g10.jpg',
            alt: '',
            headsrc: 'http://www.goto720.com/ypapp/photo/g11.png',
            headalt: '',
            name: '梅花石刻',
            price: '13,390.00'
          },{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/g10.jpg',
            alt: '',
            headsrc: 'http://www.goto720.com/ypapp/photo/g11.png',
            headalt: '',
            name: '梅花石刻',
            price: '13,390.00'
          },{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/g10.jpg',
            alt: '',
            headsrc: 'http://www.goto720.com/ypapp/photo/g11.png',
            headalt: '',
            name: '梅花石刻',
            price: '13,390.00'
          },{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/g10.jpg',
            alt: '',
            headsrc: 'http://www.goto720.com/ypapp/photo/g11.png',
            headalt: '',
            name: '梅花石刻',
            price: '13,390.00'
          }];
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/mfw_second', text: '美 • 服务'}, {liclasses: '', ahref: '', text: '创意众筹'}]);
  	const _this = this;
    eventProxy.on('changeClassName', (classname) => {
      _this.setState({
        gdz_classname: classname.gdz_classname,
        gdz_shaixuan_classname: classname.gdz_shaixuan_classname
      });
    });
  }

  closeTishi(e){
  	this.setState({
  		mfw_gdz_tishi: 'tishi_hide'
  	});
  	e.stopPropagation();
    e.preventDefault();
  }

  changELeClassName (e) {
    const str = e.target.getAttribute('data-tag');
    const _this = this;
    let result = new Object();
    switch(str){
      case 'gdz_back': //返回
        result['gdz_shaixuan_classname'] = 'hide_left';
        result['gdz_classname'] = 'show_right';
        break;
      case 'title':
        result['gdz_box'] = 'hide_left';
        result['gdz_backgroud_class'] = '';
        break;
      case 'gdz_ku':
      	result['gdz_box'] = 'show_left';
        result['gdz_backgroud_class'] = 'gdz_backgroud_show';
      default:
        break
    }
    for(let i in result){
      this.setState({
        [i]: result[i]
      });
    }
    e.stopPropagation();
    e.preventDefault();
  }

  changeTab(e){
  	if(e.target.nodeName == 'SPAN'){
  		if(!this.lastNode)this.lastNode = this.refs.lastNode;

  		if(this.lastNode == e.target.nextSibling) return;
  		this.lastNode.style.display = 'none';
  		this.lastNode = e.target.nextSibling;
  		this.lastNode.style.display = 'block';

  	}
  }

  render() {
  	const styles = require('./CustomMade.scss');
  	const _this = this;
    return(
    	<div>
	    	<article className={styles.background_color + ' ' + styles.padding_top + ' ' + dealStyles(styles, _this.state.gdz_classname)} id="gdz">
			    <Swiper ifdots='1'/>
			    <div className={styles.mfw_gdz_nav}>
			        <div className={styles['swiper-container']}>
			            <div className={styles['swiper-wrapper']}>
			                <div className={styles['swiper-slide']}>
			                    <SortNav styles={styles}/>
			                </div>
			            </div>
			            <div className={styles['swiper-pagination'] + ' ' + styles.miss}></div>
			        </div>
			        <div className={styles.mfw_gdz_tishi + ' ' + dealStyles(styles, _this.state.mfw_gdz_tishi)}><img src="http://www.goto720.com/ypapp/img/mfw_off.png" alt="" className={styles.mfw_gdz_off} onTouchEnd={this.closeTishi.bind(this)}/></div>
			    </div>
			    <GoodsList list={this.goodsList} styles={styles}/>
			</article>
			<article onTouchEnd={this.changELeClassName.bind(this)}  className={styles.gdz_shaixuan + ' ' + styles.background_color + ' ' + dealStyles(styles, _this.state.gdz_shaixuan_classname)}>
			    <img data-tag='gdz_back' src="http://www.goto720.com/ypapp/img/cont_back.jpg" alt="" className={styles.gdz_back}/>
			    <menu>
			        <ul className={styles.gdz_qu}>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/gdz_icon1.png" alt=""/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/gdz_icon2.png" alt=""/></a></li>
			            <li className={styles.pr0}><a href=""><img src="http://www.goto720.com/ypapp/img/gdz_icon3.png" alt=""/></a></li>
			        </ul>
			        <div className={styles.gdz_qu_link}></div>
			        <ul className={styles.gdz_ku}>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg1.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg2.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg3.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg4.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg5.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg6.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg7.jpg" alt="" data-tag='gdz_ku'/></a></li>
			            <li><a href=""><img src="http://www.goto720.com/ypapp/img/sx_bg8.jpg" alt="" data-tag='gdz_ku'/></a></li>
			        </ul>
			    </menu>
			    <div className={styles.gdz_backgroud + ' ' + dealStyles(styles, _this.state.gdz_backgroud_class)}></div>
			    <menu className={styles.gdz_box + ' ' + dealStyles(styles, _this.state.gdz_box)}>
			        <section className={styles.box}>
			            <div className={styles.title}>
			                <span className={styles.font_size_c}>筛选</span>
			                <i><img data-tag='title' src="http://www.goto720.com/ypapp/img/box_back.jpg" alt=""/></i>
			            </div>
			            <div className={styles.up}>
			                <ul className={styles.left} onTouchEnd={this.changeTab.bind(this)}>
			                    <li className={styles.font_size_c}>
			                        <span className={styles.back1}>雕塑</span>
			                        <ul ref='lastNode' className={styles.right + ' ' + styles.show}>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                        <span className={styles.back2}>金属</span>
			                        <ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                    	<span className={styles.back3}>漆器</span>
			                    	<ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                    <span className={styles.back4}>花画</span>
			                    <ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                    <span className={styles.back5}>抽纱/刺绣</span>
			                    <ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                    <span className={styles.back6}>陶瓷</span>
			                    <ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                    <span className={styles.back7}>珠宝/首饰</span>
			                    <ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                    <li className={styles.font_size_c}>
			                    <span className={styles.back8}>地毯/挂毯</span>
			                    <ul className={styles.right}>
			                            <li><a href="">烧瓷</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                            <li><a href="">景泰蓝</a></li>
			                        </ul>
			                    </li>
			                </ul>
			            </div>
			        </section>
			    </menu>
			</article>
		</div>
    );
  }
}
