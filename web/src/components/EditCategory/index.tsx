import {Button, Form, Input} from "antd-mobile";
import {useState} from "react";

export default function(props) {
  const {category, saveFn} = props;
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    saveFn({...category, ...values})
  }
    return (
      <Form
        form={form}
        initialValues={{name: category?.name || ''}}
        onFinish={onSubmit}
        footer={
          <Button block type='submit' color='primary'>
            提交
          </Button>
        }
      >
        <Form.Header>系列管理</Form.Header>
        <Form.Item
          name='name'
          label='名称'
          rules={[{ required: true, message: '名称不能为空' }]}
        >
          <Input placeholder='请输入系列名称'/>
        </Form.Item>
      </Form>
    );
}
