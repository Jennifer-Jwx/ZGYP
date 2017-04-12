import React, { Component } from 'react';
import {Swiper, GoodsList} from 'components';
import eventProxy from '../../utils/eventProxy';

export default class Guanzhu extends Component {
  constructor() {
    super();
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
    eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/grzx', text: '个人中心'}, {liclasses: '', ahref: '', text: '关注'}]);
  }

  render() {
    const _this = this;
    const styles = require('./CustomMade.scss');
    return (
      <menu className={styles.all_padding + ' ' + styles.background_color}>
        <ul className={styles.gdz_nav}>
            <li className={styles.font_size_c + ' ' + styles.wid}><a href="">设计师</a></li>
            <li className={styles.font_size_c + ' ' + styles.wid}><a href="">店铺</a></li>
            <li className={styles.font_size_c + ' ' + styles.wid}><a href="" className={styles.bg}>艺品</a></li>
        </ul>
        <GoodsList list={this.goodsList} styles={styles}/>
      </menu>
    );
  }
}
