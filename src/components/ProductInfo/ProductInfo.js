/**
 * Created by li on 2016/4/9.
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import GoeasyPreloadImg from '../GoeasyPreloadImg/GoeasyPreloadImg';


export default class ProductInfo extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    product: PropTypes.object.isRequired,
    isCustom: PropTypes.bool
  }

  constructor() {
    super();
    this.state = {};
  }

  mouseOver() {
    this.setState({
      hover: true
    });
  }

  mouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    const styles = require('./ProductInfo.scss');
    const {index, product, isCustom} = this.props;
    const {hover} = this.state;
    let rightClassName = '';
    if ((index + 1) % 3 === 0) {
      rightClassName = styles.mr0 + ' ' + styles.w420;
    }
    let hudsClassName = styles.huds;
    if (hover === true) {
      hudsClassName = hudsClassName + ' ' + styles.hongd;
    } else if (hover === false) {
      hudsClassName = hudsClassName + ' ' + styles.hong;
    }
    let path = '/product/' + product.id;
    let priceDiv = <h3 className={styles.price}>{product.price}</h3>;
    if (isCustom) {
      path = '/customproduct/' + product.id;
      priceDiv = (<div>
        <div className="clear"></div>
        <div className={styles.customPrice}>{product.minPrice} ~ {product.maxPrice}</div>
      </div>);
    }
    return (
      <li onMouseOver={this.mouseOver.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}
          className={styles.component + ' ' + rightClassName}>
        <Link to={path} target="_blank">
          <dl>
            <dd>
              <GoeasyPreloadImg img={product.img}/>
              <div className={styles.hotorexperience}>
                { product.isExperienceProduct === '1' ?
                  <img src="http://tupian.goeasy.net:9999/yipinwang/third/baokuan1.png" className={styles.hot}/> : ''}
                {
                  product.isExperienceGoods === '1' ?
                  <img src="http://tupian.goeasy.net:9999/yipinwang/tiyanpin.png"
                       className={styles.hot}/> : '' }
              </div>
            </dd>
            <dt style={{position: 'relative'}}>
              <div className={hudsClassName}>
                <div className={styles.hud}>
                  <div className={styles.name_all}>
                    <h3>{product.shop}</h3>
                    <div style={{display: 'none'}} className={styles.link}></div>
                    <h3 className={styles.fz_a}></h3>
                  </div>
                  <div className={styles.img_name}>{product.shopImg ? <img src={product.shopImg} alt=""/> : ''}</div>
                </div>
                <div className={styles.hud + ' ' + styles.col} style={{width: rightClassName !== '' ? 208 : 209}}>
                  <div className={styles.name_all}>
                    <h3>{product.author}</h3>
                    <div style={{display: 'none'}} className={styles.link}></div>
                    <h3 className={styles.fz_a}></h3>
                  </div>
                  <div className={styles.img_name}>{product.authorImg ?
                    <img src={product.authorImg} alt=""/> : ''}</div>
                </div>
              </div>
              <div className={styles.hudd}>
                <div className={styles.hud}><h3 className={styles.typeName}>{product.typeName}</h3><h3 style={{paddingTop: 3}}>{product.name}</h3><h3 className={styles.size}>{product.size}</h3></div>
                <div className={styles.hud + ' ' + styles.secondHud}><h3 style={{float: 'left'}}>￥:</h3>{priceDiv}
                </div>
                <div className={styles.hud + ' ' + styles.thirdHud} style={{width: rightClassName !== '' ? 138 : 139}}>
                  <h3>{'产地：' + product.placeOfOrigin}</h3>
                  <h4>库存：{product.inStock}</h4>
                </div>
              </div>
            </dt>
          </dl>
        </Link>
      </li>
    );
  }
}
