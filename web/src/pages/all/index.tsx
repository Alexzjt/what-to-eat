import React, {useEffect, useRef, useState} from 'react'
import {ActionSheet, Badge, Button, Empty, SideBar, Tag, Toast} from 'antd-mobile'
import styles from './index.less';
import ChooseDish from '@/components/ChooseDish';
import {useDispatch, useSelector} from "@@/plugin-dva/exports";
import {useMount} from "ahooks";
import {ActionSheetRef} from "antd-mobile/es/components/action-sheet/action-sheet";
import Trolley from '@/components/Trolley';
export default () => {
  const {currentCategory, withDishes, trolley} = useSelector((state: any) => state.category);
  const handler = useRef<ActionSheetRef>()
  const dispatch = useDispatch();
  useMount(() => dispatch({type: "category/getCategoriesWithDishes"}));

  function setTrolley(trolleyState: any) {
    dispatch({type: 'category/setTrolley', payload: trolleyState})
  }

  function submitFn(record: any) {
    dispatch({type: 'manage/postRecords', payload: {
        eatTime: new Date(),
        dishes: trolley
      }});
    handler.current?.close();
    Toast.show('保存用餐记录成功')
  }

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
      <Tag round color='#2db7f5' className={styles.trolley} onClick={()=> {
        handler.current = ActionSheet.show({
          extra: (<Trolley trolley={trolley} setFn={setTrolley} submitFn={submitFn}/>),
          actions: []
        })
      }}>
        购物车
      </Tag>
    </div>
  );
}
