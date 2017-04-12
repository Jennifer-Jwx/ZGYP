/**
 * Created by li on 2016/4/8.
 */
import React, { Component, PropTypes } from 'react';
import Carousel from 'react-slick';

class LeftNavButton extends Component {
  static propTypes = {
    page: PropTypes.string
  };

  render() {
    const {page} = this.props;
    let styles = require('./GoeasyCarousel.scss');
    if (page === 'mainCenter') {
      styles = require('./Home.scss');
    }
    return (
      <a {...this.props} className={styles.Carousel_side}/>
    );
  }
}

class RightNavButton extends Component {
  static propTypes = {
    page: PropTypes.string
  };

  render() {
    const {page} = this.props;
    let styles = require('./GoeasyCarousel.scss');
    if (page === 'mainCenter') {
      styles = require('./Home.scss');
    }
    return (
      <a {...this.props} className={styles.Carousel_side + ' ' + styles.Carousel_side_right}/>
    );
  }
}

export default class GoeasyCarousel extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    page: PropTypes.string,
    style: PropTypes.object,
    ifdots: PropTypes.string
  };

  render() {
    const styles = require('./GoeasyCarousel.scss');
    const { images, page, style, ifdots } = this.props;
    let isArrow = true;
    if (page === 'mainOther' || page === 'productsListMiddle') {
      isArrow = false;
    }
    const settings = {
      dots: Boolean(parseInt(ifdots)),
      infinite: true,
      arrows: isArrow,
      dotsClass: 'slick-dots ' + styles.dotsClass,
      // fade: true,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      prevArrow: page === 'mainOther' || page === 'productsListMiddle' ? '' : <LeftNavButton {...this.props} />,
      nextArrow: page === 'mainOther' || page === 'productsListMiddle' ? '' : <RightNavButton {...this.props} />
    };
    let imgStyle = {};
    //  height: 423px;
    if (page === 'productList') {
      imgStyle.height = '111px';
    }
    let currentStyle = {};
    if (style) {
      currentStyle = {...style};
      imgStyle = {...style};
    }
    console.log(currentStyle)
    return (
      <Carousel className={styles.carousel} {...settings} style={{...currentStyle}}>
        {
          images.map((image, index)=> {
            let returnCom = '';
            if (page === 'mainCenter' && image.url !== '') {
              returnCom = <a href={image.url}><img key={index} style={{...imgStyle}} alt="" src={image.img}/></a>;
            } else {
              returnCom = <img key={index} style={{...imgStyle}} alt="" src={image.img}/>;
            }
            return returnCom;
          })
        }
      </Carousel>);
  }
}
