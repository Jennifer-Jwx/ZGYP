/*
 *banner图片模块
*/ 
import React, { Component, PropTypes } from 'react';
import Round from '../Round/Round';
import eventProxy from '../../utils/eventProxy';

export default class Register extends Component {
  static propTypes = {
    ifdots: PropTypes.string
  };
  constructor() {
    super();
  }
  componentDidMount() {
    this.refs.gdz_cite.addEventListener('mousedown', function(e){
        eventProxy.trigger('changeClassName', {'gdz_classname': 'hide_right', 'gdz_shaixuan_classname': 'show_left'});
        e.stopPropagation();
        e.preventDefault();
    });
  }
  render() {
    const styles = require('./Swiper.scss');
    const {ifdots} = this.props;
    return (
        <div className={styles['swiper_container'] + ' ' + styles.all_banner}>
            <Round ifdots={ifdots}/>
            <div className={styles['swiper_pagination'] + ' ' + styles.gdz_banner_dian}></div>
            <img src='http://www.goto720.com/ypapp/img/gdz_sx.png' alt='' className={styles.gdz_cite} ref='gdz_cite'/>
        </div>
    )
  }
}



    