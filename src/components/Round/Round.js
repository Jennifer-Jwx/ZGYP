import React, {Component, PropTypes} from 'react';
import {GoeasyCarousel} from 'components';
export default class Round extends Component {
  static propTypes = {
    ifdots: PropTypes.number
  };
  constructor() {
    super();
    this.state = {
      leftCarouselImgs: [
        {
          img: 'http://tupian.goeasy.net:9999/yipinwang/mobile/photo/g9.jpg'
        }, {
          img: 'http://tupian.goeasy.net:9999/yipinwang/mobile/photo/g9.jpg'
        }
      ]
    };
  }

  render() {
    const {leftCarouselImgs} = this.state;
    const {ifdots} = this.props;
    return (

      <GoeasyCarousel ifdots={ifdots} page="mainOther" images={leftCarouselImgs}/>

    );
  }
}
