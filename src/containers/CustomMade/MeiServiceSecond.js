import React, { Component } from 'react';
import {Swiper, SortNav, GoodsList} from 'components';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class MeiServiceSecond extends Component {
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
    eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '', text: '美服务'}]);
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
          <Swiper ifdots='1'/>
          <SortNav styles={styles}/>
          <GoodsList list={this.goodsList} styles={styles}/>
        </article>

        <article className={styles.gdz_shaixuan + ' ' + styles.background_color + ' ' + dealStyles(styles, _this.state.gdz_shaixuan_classname)}>
          <img src='http://www.goto720.com/ypapp/img/cont_back.jpg' alt='' data-tag='gdz_back' className={styles.gdz_back} onTouchEnd={this.changELeClassName.bind(this)}/>
          <menu>
            <ul className={styles.gdz_qu}>
                <li><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon1.png" alt=""/></a></li>
                <li><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon2.png" alt=""/></a></li>
                <li className={styles.pr0}><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon3.png" alt=""/></a></li>
                <li><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon4.png" alt=""/></a></li>
                <li><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon5.png" alt=""/></a></li>
                <li className={styles.pr0}><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon6.png" alt=""/></a></li>
                <li><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon7.png" alt=""/></a></li>
                <li><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/mfw_icon8.png" alt=""/></a></li>
            </ul>
        </menu>
        </article>
      </div>
    );
  }
}
