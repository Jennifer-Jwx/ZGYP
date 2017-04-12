import React, { Component, PropTypes } from 'react';
import dealStyles from '../../utils/validation';
import ServiceForm from './ServiceForm';

export default class Service extends Component {
  static propTypes = {
    eleClass: PropTypes.object,
    menu: PropTypes.Array
  }
  constructor() {
    super();
  }
  render() {
    const styles = require('./Service.scss');
    const {eleClass, menu} = this.props;
    return (
      <menu className={dealStyles(styles, eleClass.menu)}>
      </menu>
    );
  }
}
