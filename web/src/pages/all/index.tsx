import React, {useEffect, useState} from 'react'
import {Badge, SideBar} from 'antd-mobile'
import styles from './index.less';
import ChooseDish from '@/components/ChooseDish';
import {useDispatch, useSelector} from "@@/plugin-dva/exports";
import {useMount} from "ahooks";
export default () => {
  const {currentCategory, withDishes} = useSelector((state: any) => state.category);
  const dispatch = useDispatch();
  useMount(() => dispatch({type: "category/getCategoriesWithDishes"}));
  return (
    <div className={styles.flexContainer}>
      <SideBar
        activeKey={`${currentCategory?.id}`}
        onChange={(key: string) => {
        const [current] = withDishes.filter(item => item.id==key);
        dispatch({type: "category/setCurrentCategory", payload: current})
      }}>
        {withDishes?.map(item => (
          <SideBar.Item key={`${item.id}`} title={item.name} />
        ))}
      </SideBar>
      <div className={styles.dishesContainer}>
        {currentCategory?.dishes?.map(item => {
          return <ChooseDish key={`${item.id}`} dish={item}/>;
        })}
      </div>
    </div>
  );
}
