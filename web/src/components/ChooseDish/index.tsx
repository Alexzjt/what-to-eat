import React from "react";
import { AddCircleOutline, CheckOutline } from 'antd-mobile-icons';
import styles from './index.less';
import {calcDaysAgo} from '@/utils';
import {useDispatch, useSelector} from "@@/plugin-dva/exports";
export default function (props) {
  const dish = props.dish;
  const dispatch = useDispatch();
  const {trolley} = useSelector((state: any) => state.category);

  function addOrCheck() {
    if (trolley.find(d => d.id===dish.id)) {
      return <span className={styles.addIcon} style={{color: 'green'}}><CheckOutline /></span>;
    }
    return <span className={styles.addIcon} onClick={() => {
      dispatch({type: `category/addDishToTrolley`, payload: dish})
    }}><AddCircleOutline /></span>
  }

  return (
    <div className={styles.container}>
      <span className='dish-name'>{dish.name}</span>
      <span className='last-eat-time'>{
        dish.lastEatTime ? descriptionHelper(calcDaysAgo(dish.lastEatTime)) : '从未吃过'
      }</span>
      {addOrCheck()}
    </div>
  );
}

function descriptionHelper(day: number): string {
  if (day === 0)
    return `今天吃过`;
  if (day < 30)
    return `${day}天前吃过`;
  return `很久之前吃过`;
}
