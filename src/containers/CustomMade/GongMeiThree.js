import React, { Component } from 'react';
import {Round, SortNav, GongMeiGoodsList} from 'components';
import dealStyles from '../../utils/validation';
import eventProxy from '../../utils/eventProxy';

export default class GongMeiThree extends Component {
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
            src: 'http://www.goto720.com/ypapp/photo/sbk17.jpg',
            alt: '',
            name: '精致华丽--景泰蓝'
          },{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/sbk16.jpg',
            alt: '',
            name: '皇宫大内的镇店之宝--景泰蓝'
          },{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/sbk17.jpg',
            alt: '',
            name: '精致华丽--景泰蓝'
          },{
            href: '#!/gdz_shopping',
            src: 'http://www.goto720.com/ypapp/photo/sbk16.jpg',
            alt: '',
            name: '皇宫大内的镇店之宝--景泰蓝'
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
          <Round ifdots='1'/>
          <SortNav styles={styles}/>
          <GongMeiGoodsList list={this.goodsList} styles={styles}/>
        </article>
    );
  }
}
