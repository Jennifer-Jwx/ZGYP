import React, { Component } from 'react';
import {Round, SortNav, GoodsList} from 'components';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class FuwuShichang extends Component {
  constructor() {
    super();
    this.state = {
      ninebox_tishi: ''
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
    eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: 'mfw_second', text: '美 • 服务'}, {liclasses: '', ahref: '', text: '原料市场'}]);
    
    //捕获修改筛选class 事件名称：changeClassName
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
      ninebox_tishi: 'tishi_hide'
    });
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const _this = this;
    const styles = require('./CustomMade.scss');
    return (
      <div>
        <article data-tag="gdz" className={styles.background_color + ' ' + styles.padding_top + ' ' + dealStyles(styles, _this.state.gdz_classname)} id='gdz'>
          <Round ifdots='1'/>
          <div className={styles.mfw_jgg}>
            <div className={styles['swiper-container']} id="ninebox">
                <div className={styles['swiper-wrapper']}>
                    <div className={styles['swiper-slide']}>
                        <div className={styles.jgg_left + ' ' + styles.jgg_left_fir}><img src="http://www.goto720.com/ypapp/img/m2.png" alt="" className={styles.mfw_m2}/></div>
                        <div className={styles.jgg_left + ' ' + styles.jgg_right}><img src="http://www.goto720.com/ypapp/img/m3.png" alt="" className={styles.mfw_m3}/></div>
                    </div>
                    <div className={styles['swiper-slide']}>
                        <div className={styles.jgg_left}><img src="http://www.goto720.com/ypapp/img/m4.png" alt="" className={styles.mfw_m4}/></div>
                        <div className={styles.jgg_left + ' ' + styles.jgg_right}><img src="http://www.goto720.com/ypapp/img/m5.png" alt="" className={styles.mfw_m5}/></div>
                    </div>
                    <div className={styles['swiper-slide']}>
                        <div className={styles.jgg_left}><img src="http://www.goto720.com/ypapp/img/m6.png" alt="" className={styles.mfw_m6}/></div>
                        <div className={styles.jgg_left + ' ' + styles.jgg_right}><img src="http://www.goto720.com/ypapp/img/m7.png" alt="" className={styles.mfw_m7}/></div>
                    </div>
                    <div className={styles['swiper-slide']}>
                        <div className={styles.jgg_left}><img src="http://www.goto720.com/ypapp/img/m8.png" alt="" className={styles.mfw_m8}/></div>
                        <div className={styles.jgg_left + ' ' + styles.jgg_right}><img src="http://www.goto720.com/ypapp/img/m9.png" alt="" className={styles.mfw_m9}/></div>
                    </div>
                    <div className={styles['swiper-slide']}>
                        <div className={styles.jgg_left}><img src="http://www.goto720.com/ypapp/img/m10.png" alt="" className={styles.mfw_m1}/></div>
                    </div>
                </div>
                <div className={styles['swiper-pagination'] + ' ' + styles.miss}></div>
            </div>
            <div className={styles.ninebox_tishi + ' ' + dealStyles(styles, _this.state.ninebox_tishi)}>
                <img src="http://www.goto720.com/ypapp/img/mfw_off.png" alt="" onTouchEnd={this.closeTishi.bind(this)} id="tishi_off"/>
            </div>
          </div>
          <SortNav styles={styles}/>
          <GoodsList list={this.goodsList} styles={styles}/>
        </article>
      </div>
    );
  }
}
