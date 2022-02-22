import React from "react";
import {Button, Modal, Tag, Toast} from "antd-mobile";
import styles from "./cookbook.less";
import DishItem from "@/components/DishItem";

export default function () {
  return (
    <div className="body-container padding">
      <div className={styles.header}>
        <Tag round color='#118cec'>
          三人吃饭
        </Tag>
        <Tag round color='#118cec'>
          简单模式
        </Tag>
      </div>
      <DishItem/>
      <div className={styles.btngroup}>
        <Button color='primary' onClick={async () => {
          const result = await Modal.confirm({
            content: '确定要提交吗？提交后将被存储到今日用餐记录',
          });
          if (result) {
            Toast.show({ content: '点击了确认', position: 'bottom' })
          } else {
            Toast.show({ content: '点击了取消', position: 'bottom' })
          }
        }}>
          确定
        </Button>
        <Button>
          换一批
        </Button>
      </div>
    </div>
  );
}
