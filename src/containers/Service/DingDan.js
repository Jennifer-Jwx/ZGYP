import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class DingDan extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '首页'}, {liclasses: '', ahref: '#!/grzx', text: '个人中心'}, {liclasses: '', ahref: '', text: '订单'}]);

	}

	render() {
		const styles = require('./Service.scss');

		return (
			<menu className={styles.all_wap + ' ' + styles.dingdan_display + ' ' + styles.background_color}>
			    <div className={styles['swiper-container'] + ' ' + styles.grzx_pl_nav}>
			        <div className={styles['swiper-wrapper'] + ' ' + styles['swiper-slide_active']} id="my_dingdan">
			            <a href="#quanbu" className={styles['swiper-slide'] + ' ' + styles.active}>全部</a>
			            <a href="#daifukuan" className={styles['swiper-slide']}>待付款</a>
			            <a href="#daishouhuo" className={styles['swiper-slide']}>待收货</a>
			            <a href="#daipingjia" className={styles['swiper-slide']}>待评价</a>
			            <a href="#pinglun" className={styles['swiper-slide']}>评论</a>
			            <a href="#tuihuan" className={styles['swiper-slide'] + ' ' + styles.bg}>退/换货</a>
			        </div>
			        {/* Add Pagination */}
			    </div>
			    <article id="quanbu" className={styles.fade + ' ' + styles.active + ' ' + styles.in + ' ' + styles.dingdan_padding_bottom + ' ' + styles.background_color}>
			        <img src="http://www.goto720.com/ypapp/img/grzx_dingdan_bg1.jpg" alt="" className={styles.grzx_gm_title + ' ' + styles.mt}/>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <img src="http://www.goto720.com/ypapp/img/grzx_dingdan_bg2.jpg" alt="" className={styles.grzx_gm_title}/>
			        <section className={styles.grzx_gm + ' ' + styles.padding_bottom}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <img src="http://www.goto720.com/ypapp/img/grzx_dingdan_bg3.jpg" alt="" className={styles.grzx_gm_title}/>
			        <section className={styles.grzx_gm + ' ' + styles.padding_bottom}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <img src="http://www.goto720.com/ypapp/img/grzx_dingdan_bg4.jpg" alt="" className={styles.grzx_gm_title}/>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <img src="http://www.goto720.com/ypapp/img/grzx_dingdan_bg5.jpg" alt="" className={styles.grzx_gm_title}/>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <d-foot></d-foot>
			    </article>

			    <article className={styles.fade + ' ' + styles.dingdan_padding_bottom} id="daifukuan">
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <label className={styles.checkBOx + ' ' + styles.picture}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></label>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.dingdan_mt1 + ' ' + styles.box_pb}>
			            <label className={styles.checkBOx + ' ' + styles.picture}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></label>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <div className={styles.gdz_bottom + ' ' + styles.grzx_gm_bottom + ' ' + styles.pos_fixed + ' ' + styles.box_show}>
			            <label className={styles.checkBOx}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><span>全选</span></label>
			            <em> ¥ 1800.00</em>
			            <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.butna + ' ' + styles.butnb + ' ' + styles.font_size_c}>立即支付</a>
			        </div>
			    </article>
			    <article id="daishouhuo" className={styles.fade + ' ' + styles.dingdan_padding_bottom}>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <label className={styles.checkBOx + ' ' + styles.picture}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></label>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.grzx_gm_butn_true + ' ' + styles.font_size_b} data-toggle="modal" data-target="#myModal">退/换货</a>
			        <div className={styles.clear}></div>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <label className={styles.checkBOx + ' ' + styles.picture}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></label>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.grzx_gm_butn_true + ' ' + styles.font_size_b} data-toggle="modal" data-target="#myModal">退/换货</a>
			        <div className={styles.gdz_bottom + ' ' + styles.grzx_gm_bottom + ' ' + styles.pos_fixed + ' ' + styles.box_show}>
			            <label className={styles.checkBOx}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><span>全选</span></label>
			            <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.butna + ' ' + styles.butnb + ' ' + styles.font_size_c}>确认收货</a>
			        </div>
			    </article>
			    <article className={styles.fade + ' ' + styles.dingdan_padding_bottom} id="daipingjia">
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <label className={styles.checkBOx + ' ' + styles.picture}><input type="checkbox" checked="true" className={styles.checkbox_in}/><i><b></b></i><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></label>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.grzx_gm_butn_true + ' ' + styles.font_size_b} data-toggle="modal" data-target="#myModal">评价</a>
			        <d-foot></d-foot>
			    </article>
			    <article id="pinglun" className={styles.fade + ' ' + styles.dingdan_padding_bottom}>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <div className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></div>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_c + ' ' + styles.all_font_weight + ' ' + styles.pt}><em>¥ 900.00</em> </h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b}>单号：002153456425454</p>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <div className={styles.grzx_pl_txt}>
			            <textarea className={styles.grzx_textarea}></textarea>
			            <p className={styles.zishu + ' ' + styles.font_size_b}>200字</p>
			        </div>
			        <div className={styles.grzx_pl_sc}><a href="javascript:void(0)"><img src="http://www.goto720.com/ypapp/img/grzx_shangchuan.png" alt=""/></a></div>
			        <div className={styles.grzx_pl_xing}>
			            <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>满意度评分</h1>
			            <div className={styles.link}></div>
			            <div className={styles.pingx}>
			                <h3 className={styles.font_size_b}>艺品满意度</h3>
			                <ul className={styles.ul_xi}>
			                    <li className={styles.active}><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                </ul>
			                <div className={styles.clear}></div>
			                <h3 className={styles.font_size_b}>物流满意度</h3>
			                <ul className={styles.ul_xi}>
			                    <li className={styles.active}><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                    <li><a href="javascript:void(0)"></a></li>
			                </ul>
			                <div className={styles.clear}></div>
			            </div>
			        </div>
			        <div className={styles.gdz_bottom + ' ' + styles.grzx_gm_bottom + ' ' + styles.pos_fixed + ' ' + styles.box_show}>
			            <a href="javascript:void(0)" className={styles.all_button + ' ' + styles.butna + ' ' + styles.font_size_c}>提交</a>
			        </div>
			    </article>
			    <article id="tuihuan" className={styles.fade + ' ' + styles.dingdan_padding_bottom}>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <a href="#!/grzx_tuihuo" className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></a>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight + ' ' + styles.pt1}><span>退货/退款</span><em>（ 已完成 ）</em></h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b + ' ' + styles.pt}>ZGYP-201251-12212</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <section className={styles.grzx_gm + ' ' + styles.box_pb}>
			            <a href="#!/grzx_tuihuo" className={styles.picture}><img src="http://www.goto720.com/ypapp/photo/zx2.jpg" alt=""/></a>
			            <div className={styles.cont_name}>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight}>【 虞美人 】 沉香木梳 </h1>
			                <h1 className={styles.font_size_b + ' ' + styles.all_font_weight + ' ' + styles.pt1}><span>退货/退款</span><em>（ 处理中 ）</em></h1>
			                <p className={styles.dan_num + ' ' + styles.font_size_b + ' ' + styles.pt}>ZGYP-201251-12212</p>
			                <a href="javascript:void(0)" className={styles.delet}><img src="http://www.goto720.com/ypapp/img/grzx_delet1.png" alt=""/></a>
			            </div>
			            <div className={styles.clear}></div>
			        </section>
			        <d-foot></d-foot>
			    </article>
			</menu>
		)
	}
}