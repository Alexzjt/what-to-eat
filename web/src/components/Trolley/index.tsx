import TrolleyDish from "@/components/TrolleyDish";
import {Button, Empty} from "antd-mobile";
import React from "react";

export default function(props) {
  const {trolley, removeFn, submitFn} = props;
    return (
      <>
        { trolley.length ? trolley.map((d, index) => {
          return <TrolleyDish key={d.id} dish={d} index={index} removeFn={removeFn}/>;
        })  : <Empty/>}
        {trolley.length ? <Button style={{marginLeft: '12px'}} color='primary' size='mini' onClick={() => {
          submitFn()
        }}>提交</Button>: <span></span>}
      </>
    );
}
