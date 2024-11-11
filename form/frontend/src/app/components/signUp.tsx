import { Row, Col, Form, Input, Button, Typography } from 'antd';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Animated from './animated';

const { Title } = Typography;

const SignUp = () => {
  return (
    <>
      <style>
        {`
          .login-container {
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          /* Styling for Row */
          .login-row {
            width: 100%;
            height: 100%;
          }

          /* Left side background image or empty container */
          .login-image {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 25% 0 0 25%;
          }

          /* Left side content */
          .login-image-content {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
          }

          .login-image h1 {
            color: #ffffff;
            font-size: 2rem;
          }

          /* Right side form container */
          .sign-up-form {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background-color: #09093e;
          }

          .form-container {
            width: 100%;
            max-width: 300px;
            padding: 2rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            background-color: #99f2c8;
          }

          .ant-btn {
            background-color: #1890ff;
            border: none;
            font-size: 16px;
          }

          .ant-btn:hover {
            background-color: #40a9ff;
          }
        `}
      </style>
      <div className="login-container">

        <Row className="login-row">
          {/* Right side with Sign Up form */}
          <Col span={12} className="sign-up-form">
            <div className="form-container">
              <Title level={2}>Sign Up</Title>
              <Form name="signup" layout="vertical">
                <Form.Item
                  label="Username"
                  name="username"
                  // rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                  <Input placeholder="Enter your username" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    // { required: true, message: 'Please enter your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    // { required: true, message: 'Please enter your password!' },
                    { min: 6, message: 'Password must be at least 6 characters!' }
                  ]}
                >
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    // { required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Confirm your password" />
                </Form.Item>

                <Form.Item>
                  <Button  type="primary" htmlType="submit" block>
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>

          {/* Left side content */}
          <Col span={12} className="login-image">
          <div className="background-animation">
          <Suspense fallback={<div>Loading...</div>}>
            <Animated />
          </Suspense>
        </div>
            <div className="login-image-content">
              <h1>WELCOME TO MY WEBSITE</h1>
              <Link to="/">
                <Button style={{backgroundColor:'rgba(153, 242, 200)'}}>
                  Login
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignUp;
