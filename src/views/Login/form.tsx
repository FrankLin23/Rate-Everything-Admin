import { Button, Form, Input, Space } from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import { useState } from 'react';
const FormItem = Form.Item;
export default function LoginForm() {
  const [formRef] = Form.useForm();

  const [loading, setLoading] = useState<boolean>(false);

  function login(params: object) {
    setLoading(true);
  }

  function onSumbitClick() {
    formRef.validate().then((values) => {
      login(values);
    });
  }

  return (
    <div className="w-[320px]">
      <div className="text-[24px] font-500 text-black leading-[32px]">
        Login Rate Everything Admin
      </div>
      <div className="text-[16px] leading-[24px] text-gray-400 mb-8">
        Welcome
      </div>
      <Form form={formRef} layout="vertical">
        <FormItem
          field="username"
          required
          rules={[
            {
              required: true,
              message: 'Please Input Username',
            },
          ]}
        >
          <Input
            prefix={<IconUser />}
            placeholder="Please Input Your Username"
            onPressEnter={onSumbitClick}
          />
        </FormItem>
        <FormItem
          field="password"
          required
          rules={[
            {
              required: true,
              message: 'Please Input Password',
            },
          ]}
        >
          <Input
            prefix={<IconLock />}
            type="password"
            placeholder="Please Input Your Password"
            onPressEnter={onSumbitClick}
          />
        </FormItem>
        <Space size={16} direction="vertical">
          <Button type="primary" long onClick={onSumbitClick} loading={loading}>
            Login
          </Button>
        </Space>
      </Form>
    </div>
  );
}
