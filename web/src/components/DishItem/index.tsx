import { LoopOutline } from 'antd-mobile-icons'
import React from "react";
export default function () {
  return (
    <div className='dish-item-container'>
      <div>
        <span className='dish-name'>水煮肉片</span>
        <span className='last-eat-time'>7天前吃过</span>
      </div>
      <div className='change-btn'>
        <LoopOutline />&nbsp;&nbsp;换一换
      </div>
    </div>
  )
}
