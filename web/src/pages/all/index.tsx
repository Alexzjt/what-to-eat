import React, { useState } from 'react'
import {Badge, SideBar} from 'antd-mobile'
import styles from './index.less';
import ChooseDish from '@/components/ChooseDish';
export default () => {
  const tabs = [
    {
      key: 'key1',
      title: '选项一',
      badge: Badge.dot,
    },
    {
      key: 'key2',
      title: '选项二',
      badge: '5',
    },
    {
      key: 'key3',
      title: '选项三',
      badge: '99+',
      disabled: true,
    },
  ]
  return (
    <div className={styles.flexContainer}>
      <SideBar>
        {tabs.map(item => (
          <SideBar.Item key={item.key} title={item.title} />
        ))}
      </SideBar>
      <div className={styles.dishesContainer}>
        <ChooseDish></ChooseDish>
      </div>
    </div>
  );
}
