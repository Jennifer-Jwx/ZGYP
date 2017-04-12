import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  App,
  Home,
  NotFound,
  ClearSession,
  Encyclopedias,
  Demo2,
  ServiceTerm,
  Register,
  CustomMade,
  CreativeCongregation,
  BaoZhen,
  BaoZhuang,
  FuwuShichang,
  MeiServiceSecond,
  YuanliaoShichang,
  ShuBaike,
  Zhenren,
  GongDingzhi,
  GongDingzhiFuwu,
  HangyeXiangxi,
  GerenZhongxin,
  ZhanghuAnquan,
  DingdanXiangqing,
  Guanzhu,
  SheZhi,
  WuliuGenzong,
  ZiLiao,
  ShouHuoDiZhi,
  XinZengFaPiao,
  XinZengShouQuan,
  ZhiFuYeMian,
  FaPiao,
  JieSuan,
  ShouQuan,
  PeiSong,
  QueRenDingdan,
  GongMeiKongJian,
  GongMeiXiangXi,
  JingPinThree,
  JingPinXiangXi,
  DaShiXiangXi,
  HangYeTouTiao,
  GongMeiThree,
  GongDingZhiThree,
  TuiHuo,
  TuiHuoShenQing,
  DingDan
} from 'containers';

// default函数中会加上参数store 在判断哪个路由需要用户登录以及其他权限时使用
//  这是路由书结构，控制整个项目路由结构
export default () => {
  return (
    <Route>
      <Route path="/" component={App}>
        <Route path="clear" component={ClearSession}/>
        <Route>
          <IndexRoute component={Home}/>
          <Route path="fwtk" component={ServiceTerm}/>
          <Route path="zc" component={Register}/>
          <Route path="gdz_two" component={CustomMade}/>
          <Route path="mfw_zhongchou" component={CreativeCongregation}/>
          <Route path="gdz_baozhen" component={BaoZhen}/>
          <Route path="gdz_baozhuang" component={BaoZhuang}/>
          <Route path="mfw_fwsc" component={FuwuShichang}/>
          <Route path="mfw_second" component={MeiServiceSecond}/>
          <Route path="mfw_ylsc" component={YuanliaoShichang}/>
          <Route path="sbk_first" component={ShuBaike}/>
          <Route path="sbk_space_people2" component={Zhenren}/>
          <Route path="gdz_dingzhi" component={GongDingzhi}/>
          <Route path="gdz_fuwu" component={GongDingzhiFuwu}/>
          <Route path="wr_sbk_hytt" component={HangyeXiangxi}/>
          <Route path="grzx" component={GerenZhongxin}/>
          <Route path="grzx_aq" component={ZhanghuAnquan}/>
          <Route path="grzx_dingdan_xq" component={DingdanXiangqing}/>
          <Route path="grzx_gz" component={Guanzhu}/>
          <Route path="grzx_sz" component={SheZhi}/>
          <Route path="grzx_wlgz" component={WuliuGenzong}/>
          <Route path="grzx_wlgz" component={WuliuGenzong}/>
          <Route path="grzx_zl" component={ZiLiao}/>
          <Route path="shdz" component={ShouHuoDiZhi}/>
          <Route path="xzfp" component={XinZengFaPiao}/>
          <Route path="xzsq" component={XinZengShouQuan}/>
          <Route path="zfym" component={ZhiFuYeMian}/>
          <Route path="wr_js_fp" component={FaPiao}/>
          <Route path="wr_js_jsuan" component={JieSuan}/>
          <Route path="wr_js_sq" component={ShouQuan}/>
          <Route path="wr_js_ps" component={PeiSong}/>
          <Route path="JieSuan" component={QueRenDingdan}/>
          <Route path="sbk_gmkj_hw_three" component={GongMeiKongJian}/>
          <Route path="sbk_gmkj_hw_xx" component={GongMeiXiangXi}/>
          <Route path="sbk_gmkj_jp_three" component={JingPinThree}/>
          <Route path="sbk_gmkj_jp_xx" component={JingPinXiangXi}/>
          <Route path="sbk_gmkj_ds_xx" component={DaShiXiangXi}/>
          <Route path="sbk_hytt_three" component={HangYeTouTiao}/>
          <Route path="sbk_gmbk_three" component={GongMeiThree}/>
          <Route path="gdz_three" component={GongDingZhiThree}/>
          <Route path="grzx_tuihuo" component={TuiHuo}/>
          <Route path="grzx_tuihuo_sq" component={TuiHuoShenQing}/>
          <Route path="grzx_dingdan" component={DingDan}/>
        </Route>
        <Route path="*" component={NotFound} status={404}/>
      </Route>
    </Route>
  );
};
