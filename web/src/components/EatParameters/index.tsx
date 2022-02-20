import {Button, Form, Input, Stepper, Switch} from "antd-mobile";
import React, {useState} from "react";

export default () => {
  const defaultNumber = 3;
  const [checked, setChecked] = useState(false);
  const [number, setNumber] = useState(defaultNumber);
  const onFinish = () => {
    console.log(`checked = ${checked}, number = ${number}`);
  };

  return (
    <Form initialValues={{number: defaultNumber}}
      onFinish={onFinish}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
    >
      <Form.Item name='number' label='几个人吃饭'>
        <Stepper value={number} onChange={num => setNumber(num)}/>
      </Form.Item>
      <Form.Item name='easy' label='简单模式'>
        <Switch
          checked={checked}
          onChange={checked => {
            setChecked(checked)
          }}
        />
      </Form.Item>
    </Form>
  );
}
