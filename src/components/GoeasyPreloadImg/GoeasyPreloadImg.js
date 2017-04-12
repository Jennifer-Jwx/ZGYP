/**
 * Created by Administrator on 2016/7/28.
 */
import React, { Component, PropTypes } from 'react';
import ImageLoader from 'react-imageloader';

function preloader() {
  const img = require('./loading.gif');
  return <img src={img}/>;
}

export default class PreloadImg extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired
  }

  render() {
    const {img} = this.props;
    const loadingError = require('./loading-error.png');
    return (<ImageLoader
      src={img}
      wrapper={React.DOM.div}
      preloader={preloader}>
      <img src={loadingError}/>
    </ImageLoader>);
  }
}
