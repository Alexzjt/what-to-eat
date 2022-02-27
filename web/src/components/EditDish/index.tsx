import {Button, Calendar, Form, Input, Modal, Radio, Space, Switch} from "antd-mobile";
import React, {useState} from "react";
import dayjs from "dayjs";
import styles from "./index.less";
import {useDispatch, useSelector} from "@@/plugin-dva/exports";

export default function (props: any) {
  const {dish, categories, saveFn} = props;
  const [name, setName] = useState(dish?.name || '');
  const [easy, setEasy] = useState(dish?.easy || false);
  const [lastEatTime, setLastEatTime] = useState(dish?.lastEatTime || new Date());
  const [category, setCategory] = useState(dish?.category || categories[0]);

  return (
    <Form
      onFinish={e => saveFn({...dish, name, easy, lastEatTime, category})}
      className={styles.editDishForm} footer={
      <>
        <Button block type='submit' color='primary'>提交</Button>
      </>
    }>
      <Form.Header>菜品管理</Form.Header>
      <Form.Item label='菜名' name={'name'}
                 rules={[{required: true, message: '菜名不能为空'}]}>
        <Input placeholder='请输入' value={name} onChange={value => setName(value)}/>
      </Form.Item>
      <Form.Item label='简单'>
        <Switch
          checked={easy}
          onChange={checked => {
            setEasy(checked)
          }}
        />
      </Form.Item>
      <Form.Item label='最近食用时间'>
        <span>{dayjs(lastEatTime).format(`YYYY年MM月DD`)}</span>
        &nbsp;&nbsp;
        <a onClick={e => {
          const lastEatTimeModal = Modal.show({
            content: <Calendar selectionMode='single'
                               onChange={val => {
                                 setLastEatTime(val);
                                 lastEatTimeModal.close();
                               }}/>,
            closeOnMaskClick: true
          });
        }}>选择</a>
      </Form.Item>
      <Form.Item label='分类'>
        <span>{category.name}</span>
        &nbsp;&nbsp;
        <a onClick={e => {
          const categoryModal = Modal.show({
            content: <Radio.Group
              value={category}
              onChange={value => {
                setCategory(value);
                categoryModal.close();
              }}>
              <Space direction='vertical'>
                {categories.map((d: any) => (<Radio value={d} key={d.id}>{d.name}</Radio>))}
              </Space>
            </Radio.Group>,
            closeOnMaskClick: true
          });
        }}>选择</a>
      </Form.Item>
      <Form.Header/>
    </Form>
  );
}
