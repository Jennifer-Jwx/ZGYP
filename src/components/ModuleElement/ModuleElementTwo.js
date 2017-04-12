import React, {Component, PropTypes} from 'react';
export default class ModuleElementOne extends Component {
  static propTypes = {
    src: PropTypes.string
  };
  constructor() {
    super();
  }
  render() {
    const styles = require('./ModuleElement.scss');
    return (

      <a href="#" className={styles.HangYe_left}>
        <img src="photo/sbk1.jpg" alt="" />
        <div className={styles.HangYe_text}><h5>疯狂的雕刻<br/>造出具有一定空间的可......</h5></div>
      </a>

    );
  }
}
