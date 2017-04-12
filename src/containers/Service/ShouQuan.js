import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class ShouQuan extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '', text: '结算'}, {liclasses: '', ahref: '', text: '授权'}]);
  }

  render() {
  	const styles = require('./Service.scss');
    return(
      <div>
       <article className={styles.service_fp + ' ' + styles.all_wap}>
          <div className={styles.nr_box}>
              <ul className={styles.fp_lb0}>
                  <li className={styles.fp_lb01}>埃尔法</li>
                  <li className={styles.fp_lb01}>131****5333</li>
                  <a href="#!/xzsq"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
              </ul>
              <ul className={styles.fp_lb0}>
                  <li>埃尔法</li>
                  <li>131****5333</li>
                  <a href="#!/xzsq"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
              </ul>
              <ul className={styles.fp_lb0}>
                  <li>埃尔法</li>
                  <li>131****5333</li>
                  <a href="#!/xzsq"><img className={styles.fp_xz} src="http://www.goto720.com/ypapp/img/wr/wr_xz.png" alt=""/></a>
              </ul>
          </div>
        </article>
        <footer id="index_footer">
          <menu>
            <nav>
              <center>
                  <a href="#!/zfym" className={styles.all_button + ' ' + styles.font_size_b + ' ' + styles.sh_save + ' ' + styles.sh_save_wd}>新增授权</a>
              </center>
            </nav>
          </menu>
        </footer>
    </div>
    );
  }
}
