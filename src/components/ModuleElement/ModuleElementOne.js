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

      <div className={styles.HangYe_top}><img src={this.props.src} /></div>

    );
  }
}
