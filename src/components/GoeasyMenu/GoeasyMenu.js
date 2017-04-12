import React, {Component} from 'react';
import eventProxy from '../../utils/eventProxy';
import dealStyles from '../../utils/validation';

export default class GoeasyMenu extends Component {

  constructor() {
    super();
    this.state = {
        msg: []
      }
  }
  componentDidMount() {
    // 捕获 msg 事件
    eventProxy.on('msg', (msg) => {
        this.setState({
            msg
        });
    });  
  }
    
  blank() {
    window.history.go(-1);
  }
  render() {
    const styles = require('./GoeasyMenu.scss');
    const msgs = this.state.msg;
    const msgsL = msgs.length - 1;
    return (

      <div>
        <nav id={styles.cont} className={styles.guodu} style={msgs.length == 0 ? {display:'none'} : {display:'block'}}>
          <ul className={styles.cont_ul} ref="cont_ul">
          {Object.keys(msgs).map((ind) =>
            <li className={dealStyles(styles, msgs[ind].liclasses)}>
              <a href={msgs[ind].ahref} className={ind == msgsL ? styles.bg : null} >{msgs[ind].text}</a>
            </li>
          )}
          </ul>
          <a href="" id={styles.cont_back}><img onClick={this.blank.bind(this)} src="http://tupian.goeasy.net:9999/yipinwang/mobile/img/cont_back.jpg" alt=""/></a>
        </nav>
        <header id={styles.index_header} className={styles.guodu}>
          <i className={styles.logo} ></i>
          <menu>
            <nav>
              <a className={styles.more} href="#!/default"><i></i></a>
              <a className={styles.so_se} ><i></i></a>
            </nav>
            <div className={styles.so_box} >
              <header className={styles.so_header}>
                <form>
                  <div className={styles.so_se}>
                    <input placeholder="请输入搜索内容" type="text"/>
                    <button>
                      <img src="http://tupian.goeasy.net:9999/yipinwang/mobile/svg/out.svg" alt=""/>
                    </button>
                  </div>
                  <input className={styles.btn_a + '' + styles.hui_01} value="取消" />
                </form>
              </header>
              <article className={styles.so_body} >
                <h1><i className={styles.icon_a} ></i><span>热门搜索</span></h1>
                <div className={styles.a_lay_box} >
                  <a href="">花画</a><a href="">抽纱刺绣</a><a href="">抽纱刺绣</a><a href="">抽纱刺绣</a><a href="">地毯挂毯</a>
                </div>
                <h1 className={styles.mt_10} ><i className={styles.icon_b} ></i><span>历史记录</span></h1>
                <div className={styles.a_lay_box} >
                  <a href="">花画</a><a href="">抽纱刺绣</a><a href="">抽纱刺绣</a><a href="">抽纱刺绣</a><a href="">地毯挂毯</a>
                </div>
              </article>
            </div>
          </menu>
          <div className={styles.head_topmenu} >
            <a href="#!/gdz_two"></a>
            <a href="#!/gdz_two"></a>
            <a href="#!/mfw_second"></a>
            <a href="#!/sbk_first"></a>
          </div>
        </header>
        <footer id="index_footer">
          <menu>
            <nav>
              <a className={styles.tyd} ><i>&nbsp;</i></a>
              <a className={styles.bwg} ><i>&nbsp;</i></a>
              <a className={styles.User} ><i>&nbsp;</i></a>
              <a className={styles.login_let} ><i>&nbsp;</i></a>
            </nav>
          </menu>
        </footer>
      </div>

    );
  }
}
