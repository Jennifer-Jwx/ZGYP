import React, { Component, PropTypes } from 'react';

export default class GongMeiGoodsList extends Component {
  static propTypes = {
    list: PropTypes.array,
    styles: PropTypes.object
  }
  constructor() {
    super();
  }
  render() {
  	const {list, styles} = this.props;
    return (
        <ul className={styles.gdz_cp}>
        	{Object.keys(list).map((ind) => 
        		<li>
        			<a href={list[ind].href}>
        				<dl>
        					<dd><img src={list[ind].src} alt={list[ind].alt} /></dd>
        					<dt>
        						<h6 className={styles.font_size_b}>{list[ind].name}</h6>
        					</dt>
        				</dl>
        			</a>
        		</li>
        	)}
            <div className={styles.clear}></div>
        </ul>
    )
  }
}