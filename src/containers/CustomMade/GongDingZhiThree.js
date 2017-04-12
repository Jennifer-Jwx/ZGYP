import React, { Component } from 'react';
import {SortNav, GoodsList} from 'components';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class GongDingZhiThree extends Component {
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
  }


  render() {
    const _this = this;
    const styles = require('./CustomMade.scss');
    return (
        <article data-tag="gdz" className={styles.background_color + ' ' + styles.padding_top + ' ' + dealStyles(styles, _this.state.gdz_classname)} id='gdz'>
          <img src="http://www.goto720.com/ypapp/img/gdz_three_img1.jpg" alt="" className={styles.gdz_three_img}/>
          <SortNav styles={styles}/>
          <GoodsList list={this.goodsList} styles={styles}/>
        </article>
    );
  }
}
