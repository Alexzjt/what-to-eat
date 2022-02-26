import {Button, Form, Input} from "antd-mobile";
import {useState} from "react";

export default function(props) {
  const {category, saveFn} = props;
  const [name, setName] = useState(category?.name || '');
    return (
      <Form
        onFinish={() => {
          saveFn({...category, name})
        }}
        footer={
          <Button block type='submit' color='primary'>
            提交
          </Button>
        }
      >
        <Form.Header>系列管理</Form.Header>
        <Form.Item
          name='名称'
          label='名称'
          rules={[{ required: true, message: '名称不能为空' }]}
        >
          <Input placeholder='请输入系列名称' value={name} onChange={value => setName(value)}/>
        </Form.Item>
      </Form>
    );
}
