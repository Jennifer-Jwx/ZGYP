import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class PeiSong extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '结算'}, {liclasses: '', ahref: '', text: '配送'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
       <article className={styles.service_fp + ' ' + styles.all_wap}>
          <div className={styles.nr_box}>
              <ul className={styles.fp_ps}>
                  <li>埃尔法</li>
                  <li>131****5333</li>
                  <a href="#!/shdz"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
                  <p className={styles.psdz}>吉林省长春市  朝阳区南湖大路与辉南街交汇
                      天宝图文二楼  浩维数研所 <a className={styles.txt_red}>（ 顺丰速递 ¥20 ）</a> </p>
              </ul>
              <ul className={styles.fp_ps}>
                  <li>埃尔法</li>
                  <li>131****5333</li>
                  <a href="#!/shdz"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
                  <p className={styles.psdz}>吉林省长春市  朝阳区南湖大路与辉南街交汇
                      天宝图文二楼  浩维数研所 <a className={styles.txt_red}>（ 顺丰速递 ¥20 ）</a> </p>
              </ul>
              <ul className={styles.fp_ps}>
                  <li>埃尔法</li>
                  <li>131****5333</li>
                  <a href="#!/shdz"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
                  <p className={styles.psdz}>吉林省长春市  朝阳区南湖大路与辉南街交汇
                      天宝图文二楼  浩维数研所 <a className={styles.txt_red}>（ 顺丰速递 ¥20 ）</a> </p>
              </ul>
          </div>
        </article>
        <footer id="index_footer">
          <menu>
            <nav>
              <center>
                  <a href="#!/zfym" className={styles.all_button + ' ' + styles.font_size_b + ' ' + styles.sh_save + ' ' + styles.sh_save_wd}>新增配送</a>
              </center>
            </nav>
          </menu>
        </footer>
    </div>
    );
  }
}
