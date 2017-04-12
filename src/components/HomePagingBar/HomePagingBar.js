/**
 * Created by li on 2016/4/11.
 */
import React, { Component, PropTypes } from 'react';
// import ReactPaginate from 'react-paginate';
import ReactPaginate from '../Paginate/Paginate';


export default class HomePagingBar extends Component {
  static propTypes = {
    totalPageNumber: PropTypes.number.isRequired,
    onPageItemClick: PropTypes.func,
    selected: PropTypes.number
  }

  handlePageClick(object) {
    const {onPageItemClick} = this.props;
    if (onPageItemClick) {
      onPageItemClick(object.selected);
    }
  }

  render() {
    const styles = require('./HomePagingBar.scss');
    const {totalPageNumber, selected} = this.props;
    let width = 200;
    if (totalPageNumber <= 11) {
      // if (totalPageNumber <= 8) {
      // width = 200 + totalPageNumber * 35;
      width = 95 + totalPageNumber * 45;
    } else {
      width = 590;
    }
    return (
      <div className={styles.component}>
        <div style={{width: width, height: 43, margin: '0 auto'}}>
          <ReactPaginate previousLabel={<span className={styles.triangle_border_left}></span>}
                         nextLabel={<span className={styles.triangle_border_right}></span>}
                         breakLabel={<span>...</span>}
                         forceSelected={selected}
                         pageNum={totalPageNumber}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         clickCallback={this.handlePageClick.bind(this)}
                         containerClassName={styles.pagination}
                         subContainerClassName={"pages pagination"}
                         activeClassName={styles.active}/>
        </div>
      </div>
    );
  }
}
