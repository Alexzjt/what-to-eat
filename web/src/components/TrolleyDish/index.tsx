import {Badge, Tag} from "antd-mobile";
import React from "react";
import { CloseCircleOutline } from 'antd-mobile-icons'
export default function (props) {
  const {dish, index, removeFn} = props;
  return (
    <Badge content={<CloseCircleOutline onClick={() => {
      removeFn(index)
    }}/>} color='#1677ff'>
      <Tag color='default' fill='outline' style={{marginLeft: '12px'}}>{dish.name}</Tag>
    </Badge>
  );
}
