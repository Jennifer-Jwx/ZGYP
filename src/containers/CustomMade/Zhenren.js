import React, { Component } from 'react';
import {Round, SortNav, PeopleList} from 'components';
import eventProxy from '../../utils/eventProxy';

export default class ShuBaike extends Component {
  constructor() {
    super();
  }
  
  componentWillMount(){
  	 this.peopleList = [{
            href: '#!/sbk_gmkj_zr3',
            src: 'http://www.goto720.com/ypapp/photo/sbk11.jpg',
            alt: '',
            name: '钟联盛',
            othername: 'zhongliansheng',
            from: '北京珐琅厂'
          },{
            href: '#!/sbk_gmkj_zr3',
            src: 'http://www.goto720.com/ypapp/photo/sbk11.jpg',
            alt: '',
            name: '钟联盛',
            othername: 'zhongliansheng',
            from: '北京珐琅厂'
          },{
            href: '#!/sbk_gmkj_zr3',
            src: 'http://www.goto720.com/ypapp/photo/sbk11.jpg',
            alt: '',
            name: '钟联盛',
            othername: 'zhongliansheng',
            from: '北京珐琅厂'
          },{
            href: '#!/sbk_gmkj_zr3',
            src: 'http://www.goto720.com/ypapp/photo/sbk11.jpg',
            alt: '',
            name: '钟联盛',
            othername: 'zhongliansheng',
            from: '北京珐琅厂'
          },{
            href: '#!/sbk_gmkj_zr3',
            src: 'http://www.goto720.com/ypapp/photo/sbk11.jpg',
            alt: '',
            name: '钟联盛',
            othername: 'zhongliansheng',
            from: '北京珐琅厂'
          },{
            href: '#!/sbk_gmkj_zr3',
            src: 'http://www.goto720.com/ypapp/photo/sbk11.jpg',
            alt: '',
            name: '钟联盛',
            othername: 'zhongliansheng',
            from: '北京珐琅厂'
          }];
  }
  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: 'default', text: '术 • 百科'}, {liclasses: '', ahref: '#!/sbk_space_people', text: '工美百科'}, {liclasses: '', ahref: '', text: '真人'}]);
  }

  render() {
  	const styles = require('./CustomMade.scss');
    return(
    	<article className={styles.background_color + ' ' + styles.padding_top}>
		    <Round ifdots='1'/>
          	<SortNav styles={styles}/>
          	<PeopleList list={this.peopleList} styles={styles}/>
		</article>
    );
  }
}
