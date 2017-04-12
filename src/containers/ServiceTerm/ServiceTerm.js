import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class ServiceTerm extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // 发布 msg 事件
    eventProxy.trigger('msg', [{liclasses: 'font_size_b', ahref: '#!/JieSuan', text: '服务条款'}]);
  }
  render() {
    const styles = require('./ServiceTerm.scss');
    return (
    <article className={styles.service}>
        <h1 className={styles.font_size_c}>《中国工艺品网服务条款》</h1>
        <p className={styles.font_size_a}>
	        本协议是您与艺品网网站（简称"本站"，网址：www.YP .com）所有者（以下简称为"京东"）之间就京东网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击"同意并继续"按钮后，本协议即构成对双方有约束力的法律文件。<br/>
	        第1条 本站服务条款的确认和接纳<br/><br/>
	        1.1本站的各项电子服务的所有权和运作权归京东所有用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。<br/><br/>
	        1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。<br/><br/>
	        1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。<br/><br/>
	        1.4京东保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。<br/>
	        第2条 本站服务<br/><br/>
	        2.1京东通过互联网依法为用户提供互联网信息等服务用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
        </p>
        <a href="" className={styles.all_button + ' ' + styles.butn + ' ' + styles.font_size_c}>同意</a>
        <a href="" className={styles.all_button + ' ' + styles.butn + ' ' + styles.font_size_c}>返回</a>
    </article>
    );
  }
}
