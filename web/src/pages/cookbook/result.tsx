import React from "react";
import {Tag} from "antd-mobile";
import styles from "./cookbook.less";

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

    </div>
  );
}
