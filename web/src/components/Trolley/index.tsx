import TrolleyDish from "@/components/TrolleyDish";
import {Button, Empty} from "antd-mobile";
import React, {useEffect} from "react";
import styles from './index.less';

export default function (props) {
  const {trolley, removeFn, submitFn} = props;
  return (
    <div className={styles.trolleyContainer}>
      {trolley.length ? trolley.map((d, index) => {
        return <TrolleyDish key={d.id} dish={d} index={index} removeFn={removeFn}/>;
      }) : <Empty/>}
      {trolley.length ? <Button style={{marginLeft: '12px'}} color='primary' size='mini' onClick={() => {
        submitFn()
      }}>提交</Button> : <span></span>}
    </div>
  );
}
