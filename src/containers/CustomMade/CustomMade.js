import React, { Component } from 'react';
import {Swiper, SortNav, GoodsList} from 'components';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class CustomMade extends Component {
  constructor() {
    super();
    this.state = {
      gdz_classname: '',
      gdz_shaixuan_classname: '',
      gdz_backgroud_class: '',
      yipin: '',
      dashi: ''
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
    eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/gdz_two', text: '工 • 定制'}, {liclasses: '', ahref: '', text: '筛选'}]);

    //捕获修改筛选class 事件名称：changeClassName
    const _this = this;
    eventProxy.on('changeClassName', (classname) => {
      _this.setState({
        gdz_classname: classname.gdz_classname,
        gdz_shaixuan_classname: classname.gdz_shaixuan_classname
      });
    });
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
      case 'yipin':
        result['yipin'] = 'show_left';
        result['gdz_backgroud_class'] = 'gdz_backgroud_show';
        break;
      case 'title':
        result['yipin'] = 'hide_left';
        result['dashi'] = 'hide_left';
        result['gdz_backgroud_class'] = '';
        break;
      case 'dianpu':
        result['dashi'] = 'show_left';
        result['gdz_backgroud_class'] = 'gdz_backgroud_show';
        break;
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

  navMove (e){
    const _this = this;
    _this.moveFlag = false;
    let flag = true;
    let startX = e.touches[0].pageX;
    document.addEventListener('touchmove', function(e){
      if(!flag) return;
      _this.moveFlag = true;
      const moveX = e.touches[0].pageX;
      let _left = _this.refs.swiper.style.transform;
      _left = _left ? _left.match(/\-{0,1}\d+/i)[0] : 0;
      _left = _left - (startX - moveX);
      _this.refs.swiper.style.transform = 'translateX(' + _left + 'px)';
      startX = moveX;
    });
    document.addEventListener('touchend', function(e){
      flag = false;
    });
  }

  slideStyle(e){
    if(!this.moveFlag){
      e.target.style.color = '#ff0000';
      if(this.lastNode !== e.target){
        if(this.lastNode)this.lastNode.style.color = '#fff';
        this.lastNode = e.target;
      }
    }
  }

  render() {
    const _this = this;
    const styles = require('./CustomMade.scss');
    return (
      <div>
        <article data-tag="gdz" className={styles.background_color + ' ' + styles.padding_top + ' ' + dealStyles(styles, _this.state.gdz_classname)} id='gdz'>
          <Swiper ifdots='0'/>
          <SortNav styles={styles}/>
          <GoodsList list={this.goodsList} styles={styles}/>
        </article>

        <article className={styles.gdz_shaixuan + ' ' + styles.background_color + ' ' + dealStyles(styles, _this.state.gdz_shaixuan_classname)}>
          <img src='http://www.goto720.com/ypapp/img/cont_back.jpg' alt='' data-tag='gdz_back' className={styles.gdz_back} onTouchEnd={this.changELeClassName.bind(this)}/>
          <menu>
            <ul className={styles.gdz_qu} onTouchEnd={this.changELeClassName.bind(this)}>
              <li className={styles.dianpu}><a href='javascript:void(0)'><img data-tag='dianpu' src='http://www.goto720.com/ypapp/img/gdz_icon1.png' alt=''/></a></li>
              <li className={styles.yipin}><a href='javascript:void(0)'><img data-tag='yipin' src='http://www.goto720.com/ypapp/img/gdz_icon2.png' alt=''/></a></li>
              <li className={styles.pr0 + ' ' + styles.dianpu}><a href='javascript:void(0)'><img data-tag='dianpu' src='http://www.goto720.com/ypapp/img/gdz_icon3.png' alt=''/></a></li>
              <li className={styles.yipin}><a href='javascript:void(0)'><img data-tag='yipin' src='http://www.goto720.com/ypapp/img/gdz_icon4.png' alt=''/></a></li>
              <li className={styles.yipin}><a href='javascript:void(0)'><img data-tag='yipin' src='http://www.goto720.com/ypapp/img/gdz_icon5.png' alt=''/></a></li>
              <li className={styles.pr0 + ' ' + styles.yipin}><a href='javascript:void(0)'><img data-tag='yipin' src='http://www.goto720.com/ypapp/img/gdz_icon6.png' alt=''/></a></li>
              <li className={styles.yipin}><a href='javascript:void(0)'><img data-tag='yipin' src='http://www.goto720.com/ypapp/img/gdz_icon7.png' alt=''/></a></li>
            </ul>
          </menu>
        </article>

        <div className={styles.gdz_backgroud + ' ' + dealStyles(styles, _this.state.gdz_backgroud_class)}></div>
        <menu className={styles.gdz_box + ' ' + dealStyles(styles, _this.state.yipin)}>
          <section className={styles.box}>
            <div className={styles.title} onTouchEnd={this.changELeClassName.bind(this)}>
              <i><img data-tag='title' src='http://www.goto720.com/ypapp/img/gdz_two_sx_back.png' alt=''/></i>
            </div>
            <div className={styles.up}>
              <ul className={styles.shaix}>
                <li className={styles.bianzhi}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg1.jpg' alt=''/></li>
                <li className={styles.jinshu}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg2.jpg' alt=''/></li>
                <li className={styles.diaoshu}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg3.jpg' alt=''/></li>
                <li className={styles.qiqi}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg4.jpg' alt=''/></li>
                <li className={styles.huahua}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg5.jpg' alt=''/></li>
                <li className={styles.ditan}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg6.jpg' alt=''/></li>
                <li className={styles.chousha}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg7.jpg' alt=''/></li>
                <li className={styles.zhubao}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg8.jpg' alt=''/></li>
                <li className={styles.gongyi}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg9.jpg' alt=''/></li>
                <li className={styles.tanchi}><img src='http://www.goto720.com/ypapp/img/gdz_shaixuan_bg10.jpg' alt=''/></li>
              </ul>
            </div>
          </section>
        </menu>
        <menu onTouchEnd={this.changELeClassName.bind(this)} className={styles.gdz_box + ' ' + dealStyles(styles, _this.state.dashi)} id='dashi'>
          <section className={styles.box}>
            <div className={styles.title}>
              <div className={styles['swiper-container'] + ' ' + styles['swiper-abcd']} onTouchEnd={this.slideStyle.bind(this)}>
                <div onTouchStart={this.navMove.bind(this)} className={styles['swiper-wrapper']} ref='swiper'>
                  <div className={styles['swiper-slide']}>A</div>
                  <div className={styles['swiper-slide']}>B</div>
                  <div className={styles['swiper-slide']}>C</div>
                  <div className={styles['swiper-slide']}>D</div>
                  <div className={styles['swiper-slide']}>E</div>
                  <div className={styles['swiper-slide']}>F</div>
                  <div className={styles['swiper-slide']}>G</div>
                  <div className={styles['swiper-slide']}>H</div>
                  <div className={styles['swiper-slide']}>I</div>
                  <div className={styles['swiper-slide']}>J</div>
                  <div className={styles['swiper-slide']}>K</div>
                  <div className={styles['swiper-slide']}>L</div>
                  <div className={styles['swiper-slide']}>M</div>
                  <div className={styles['swiper-slide']}>N</div>
                  <div className={styles['swiper-slide']}>O</div>
                  <div className={styles['swiper-slide']}>P</div>
                  <div className={styles['swiper-slide']}>Q</div>
                  <div className={styles['swiper-slide']}>R</div>
                  <div className={styles['swiper-slide']}>S</div>
                  <div className={styles['swiper-slide']}>T</div>
                  <div className={styles['swiper-slide']}>U</div>
                  <div className={styles['swiper-slide']}>V</div>
                  <div className={styles['swiper-slide']}>W</div>
                  <div className={styles['swiper-slide']}>X</div>
                  <div className={styles['swiper-slide']}>Y</div>
                  <div className={styles['swiper-slide']}>Z</div>
                </div>
              </div>
              <i className={styles.wid}><img data-tag='title' src='http://www.goto720.com/ypapp/img/box_back_a.jpg' alt=''/></i>
            </div>
          <div className={styles.up}>
            <ul className={styles.shaix}>
              <li>
                <img src='http://www.goto720.com/ypapp/photo/g71.jpg' alt='' />
                <p className={styles.name_txt + ' ' + styles.font_size_a}>钟连盛</p>
              </li>
              <li>
                <img src='http://www.goto720.com/ypapp/photo/g71.jpg' alt='' />
                <p className={styles.name_txt + ' ' + styles.font_size_a}>钟连盛</p>
              </li>
            </ul>
          </div>
          </section>
        </menu>
      </div>
    );
  }
}
