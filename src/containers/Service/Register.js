import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';
import {ServiceNav, ServiceForm} from 'components';

export default class Register extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // 发布 msg 事件
    eventProxy.trigger('msg', [{liclasses: 'font_size_b', ahref: '', text: '注册'}]);
  }
  render() {
    const styles = require('./Service.scss');
    const eleClass = {  //元素的类名
      ul: 'regs_nav'
    }
    const menuList = [{  //菜单栏
      'name': '基本资料',
      'classes': 'border_bot',
      'ahref': ''
    }];
    const dataList = [{
      lclasses: 'regs_box',
      sclasses: 'font_size_b',
      text: '电子邮箱：',
      type: 'text',
      iclasses: 'all_input'
    },{
      lclasses: 'regs_box',
      sclasses: 'font_size_b',
      text: '用户名：',
      type: 'text',
      iclasses: 'all_input'
    },{
      lclasses: 'regs_box',
      sclasses: 'font_size_b',
      text: '密码：',
      type: 'password',
      iclasses: 'all_input'
    },{
      lclasses: 'regs_box',
      sclasses: 'font_size_b',
      text: '确认密码：',
      type: 'password',
      iclasses: 'all_input'
    }];
    return (
      <menu className={styles.regs + ' ' + styles["ng-scope"]}>
        <ServiceNav eleClass={eleClass} menuList={menuList}/>
        <ServiceForm dataList={dataList} />
        <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.regs_butn + ' ' + styles.font_size_b}>确认</a>
      </menu>
    );
  }
}
