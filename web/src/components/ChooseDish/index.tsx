import React from "react";
import { AddCircleOutline } from 'antd-mobile-icons';
import styles from './index.less';

export default function () {

  return (
    <div className={styles.container}>
      <span className='dish-name'>水煮肉片</span>
      <span className='last-eat-time'>7天前吃过</span>
      <span className={styles.addIcon}><AddCircleOutline /></span>
    </div>
  );
}
