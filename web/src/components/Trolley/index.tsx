import TrolleyDish from "@/components/TrolleyDish";
import {Button, Empty} from "antd-mobile";
import React, {useEffect, useImperativeHandle, useState} from "react";
import styles from './index.less';

export default function InnerTrolley (props) {
  const {trolley, submitFn, setFn} = props;
  const [trolleyState, setTrolleyState] = useState(trolley);

  function removeFn(index: number) {
    const copyTrolleyState = [...trolleyState];
    copyTrolleyState.splice(index, 1);
    setTrolleyState(copyTrolleyState);
    setFn(copyTrolleyState);
  }

  return (
    <div className={styles.trolleyContainer}>
      {trolleyState.length ? trolleyState.map((d, index) => {
        return <TrolleyDish key={d.id} dish={d} index={index} removeFn={removeFn}/>;
      }) : <Empty/>}
      {trolleyState.length ? <Button style={{marginLeft: '12px'}} color='primary' size='mini' onClick={() => {
        submitFn()
      }}>提交</Button> : <span></span>}
    </div>
  );
}
