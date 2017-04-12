import React, { Component, PropTypes } from 'react';
import dealStyles from '../../utils/validation';

export default class ServiceForm extends Component {
	static propTypes = {
	    dataList: PropTypes.array
  	}
	constructor() {
		super();
	}
	render() {
    	const styles = require('./Service.scss');
    	const {dataList} = this.props;
		return (
			<form>
				{Object.keys(dataList).map((ind) =>
					<label className={dealStyles(styles, dataList[ind].lclasses)}>
						<span className={dealStyles(styles, dataList[ind].sclasses)}>{dataList[ind].text}</span>
						<input type={dataList[ind].type} className={dealStyles(styles, dataList[ind].iclasses)}/>
					</label>
		        )}
	        </form>
		)
	}
}