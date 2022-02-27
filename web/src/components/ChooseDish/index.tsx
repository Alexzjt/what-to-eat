import React from "react";
import { AddCircleOutline } from 'antd-mobile-icons';
import styles from './index.less';
import {calcDaysAgo} from '@/utils';
import {useDispatch} from "@@/plugin-dva/exports";
export default function (props) {
  const dish = props.dish;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <span className='dish-name'>{dish.name}</span>
      <span className='last-eat-time'>{
        dish.lastEatTime ? descriptionHelper(calcDaysAgo(dish.lastEatTime)) : '从未吃过'
      }</span>
      <span className={styles.addIcon} onClick={() => {
        dispatch({type: `category/addDishToTrolley`, payload: dish})
      }}><AddCircleOutline /></span>
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
