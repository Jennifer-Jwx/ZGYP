import React, { Component, PropTypes } from 'react';

export default class PeopleList extends Component {
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
                    <h3 className={styles.Space_peo1}>{list[ind].name}</h3>
                    <i className={styles.Space_peo1_othername}>{list[ind].othername}</i>
                    <h1 className={styles.Space_peo2}>{list[ind].from}</h1>
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