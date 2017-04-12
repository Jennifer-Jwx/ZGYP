import React, { Component } from 'react';
import {Round} from 'components';
export default class Home extends Component {

  constructor() {
    super();
  }
  render() {
    const styles1 = require('./Home.scss');
    return (

    <article className={styles1.Wap_padding}>
      <Round ifdots='1'/>
      <ul className={styles1.home_menu1}>
        <li><a href="/gdz_two"><img src="http://tupian.goeasy.net:9999/yipinwang/mobile/img/home_page_1.jpg" alt=""/></a></li>
        <li><a href="/gdz_two"><img src="http://tupian.goeasy.net:9999/yipinwang/mobile/img/home_page_2.jpg" alt=""/></a></li>
        <li><a href="#!/mfw_second"><img src="http://tupian.goeasy.net:9999/yipinwang/mobile/img/home_page_3.jpg" alt=""/></a></li>
        <li><a href="/Encyclopedias?id=1"><img src="http://tupian.goeasy.net:9999/yipinwang/mobile/img/home_page_4.jpg" alt=""/></a></li>
      </ul>
    </article>

    );
  }

}
