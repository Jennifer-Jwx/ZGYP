import React, { Component } from 'react';
import eventProxy from '../../utils/eventProxy';

export default class HangyeXiangxi extends Component {
  constructor() {
    super();
    this.state = {
    }

  }
  componentWillMount(){
    
  }

  componentDidMount() {
  	eventProxy.trigger('msg', [{liclasses: '', ahref: '#!/default', text: '首页'}, {liclasses: '', ahref: '#!/sbk_first', text: '术 • 百科'}, {liclasses: '', ahref: 'wr_sbk_hytt', text: '行业头条'}, {liclasses: '', ahref: '', text: '详细'}]);
  }

  render() {
  	const styles = require('./CustomMade.scss');
  	const _this = this;
    return(
		<article className={styles.service}>
		    {/*--内容--*/}
		    <h2 className={styles.wz + ' ' + styles.font_size_c}>文章</h2>

		    <div className={styles.dt}></div>
		    <div className={styles.ct}></div>
		    <div className={styles.clear}></div>
		    <img className={styles.dlg} src="http://www.goto720.com/ypapp/img/wr/wr_dlg.png" alt=""/>

		    <div className={styles.fl_box}>
		        <p className={styles.flc + ' ' + styles.font_size_a}>【 北京珐琅厂 】 </p>
		        <p className={styles.dian}>•</p>
		        <img className={styles.dzz} src="http://www.goto720.com/ypapp/photo/wr/wr_dzz.png" alt=""/>
		    </div>
		    <img className={styles.imgfl} src="http://www.goto720.com/ypapp/photo/wr/wr_imgfl.png" alt=""/>

		    <p id="flcys" className={styles.flcys}>
		        进入盛夏，也就进入了荷的茁壮茂盛季节。<br/>在这个季节里我最喜欢的植物就是荷。我喜欢荷叶的圆润硕大,碧绿葱
		        翠，我喜欢荷花的娇羞柔美,灿若如霞，我喜欢莲蓬的籽粒饱满,坚硬充实，我喜欢莲藕的洁白凝脂,藕断丝连......

		        我心中充满了对荷的无限钟爱。 <br/>在我家乡的洪湖，湖中千亩.万亩的荷，真是'接天莲叶无穷碧，映日荷花别样红'，
		        那一望无际的荷叶和荷花，让人看了心旷神怡，留恋忘返。来到北京不进公园很难看到成片的荷，但是，在个别
		        的庭院里偶尔会看到'清水出芙蓉，天然去雕饰'的钵栽荷,在那方圆一两尺的花钵里，三五片荷叶上，点点露珠凝
		        碧，展现的是无比清丽;一二朵荷花亭立，玉容娇质吐芬芳，清香是多么的诱人。它的风骨，妩媚，雅致，飘逸，
		        洒脱给这个庭院增添了优美的秀色。让人看了赏心悦目，遐思无限。
		    </p>
		</article>
    );
  }
}
