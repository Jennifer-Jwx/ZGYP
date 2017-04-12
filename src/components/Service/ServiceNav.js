import React, { Component, PropTypes } from 'react';
import eventProxy from '../../utils/eventProxy';
import dealStyles from '../../utils/validation';

export default class ServiceNav extends Component {
	static propTypes = {
	    eleClass: PropTypes.object,
	    menuList: PropTypes.array
  	}
	constructor() {
		super();
	}
	render() {
		const styles = require('./Service.scss');
		const {eleClass, menuList} = this.props;
		return (
				<ul className={dealStyles(styles, eleClass.ul)}>
		          {Object.keys(menuList).map((ind) =>
		            <li className={dealStyles(styles, menuList[ind].classes)}>
		              <a href={menuList[ind].ahref}>{menuList[ind].name}</a>
		            </li>
		          )}
		        </ul>
		)
	}
}