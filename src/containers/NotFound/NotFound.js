import React from 'react';
import {WarningPage} from 'components';
// import {Link} from 'react-router';

export default function NotFound() {
  // const styles = require('./NotFound.scss');
  return (
    <WarningPage text="您所访问的链接不存在">
      { /*  <div style={{width: '100%', padding: '0px 35%'}}>
       <Link className={styles.submittedSucesBtn}
       to={'/'}>继续购买</Link>
       <Link className={styles.submittedSucesBtn}
       to={'/'}>查看订单</Link>
       </div>*/ }
    </WarningPage>
  );
}
