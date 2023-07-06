import { LockOutlined, UserOutlined, SafetyOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input } from 'antd';
import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext, useAppDispatch } from '@/hooks';
import { Settings } from '@/utils';
import {getImageCaptcha, login} from '@/apis/login'

import styles from './index.module.scss';

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const [capatcha, setCapatcha] = useState<API.CaptchaResult>({
    id: '',
    img: ''
  });

  useEffect(() => {
    getCapatcha()
  }, [])

  const onFinished = async (form: API.LoginParams) => {
    form.captchaId = capatcha.id
    try {
      setLoading(true);
      const { data } = await login(form)
      const token = data.token;
      await signIn(dispatch, token);
      navigator('/');
    } finally {
      setLoading(false);
    }
  }
  const getCapatcha = async (e?: React.MouseEvent<HTMLImageElement>) => {
    e?.preventDefault();
    const data = await getImageCaptcha();
    setCapatcha(data);
  };
  return (
    <div id={styles.loginContainer}>
      <div className={styles.loginTop}>
        <h2>{Settings.title}</h2>
        <Avatar src={Settings.logo} />
      </div>
      <Form
        name="normal_login"
        className="login-form"
        // initialValues={{ remember: true }}
        size="large"
        form={form}
        onFinish={onFinished}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input allowClear prefix={<UserOutlined />} placeholder="admin" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password prefix={<LockOutlined />} type="password" placeholder="123456" />
        </Form.Item>
        <Form.Item
            name="verifyCode"
            rules={[{ required: true, message: '请输入验证码！' }]}
        >
          <Input
              prefix={<SafetyOutlined />}
              placeholder="验证码"
              maxLength={4}
              suffix={<img src={capatcha.img} onClick={getCapatcha} className={styles.capatcha} alt="验证码" />}
          />
        </Form.Item>
        <Form.Item>
          {/*<Form.Item noStyle name="remember" valuePropName="checked">*/}
          {/*  <Checkbox>记住我</Checkbox>*/}
          {/*</Form.Item>*/}

          <a className="login-form-forgot" href="#">
            忘记密码
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            登录
          </Button>
          或者{' '}
          <a
            onClick={() => {
              form.resetFields();
            }}
          >
            现在注册!
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
