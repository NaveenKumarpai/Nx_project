import React, { Suspense } from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Animated from './animated';

const { Title } = Typography;

const LoginPage = () => {

  return (
    <>
      <style>
        {`
          .login-container {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            background-color: white;
          }

          .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
          }


          .login-row {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 2;
          }

          .login-image {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 25% 25% 0;
          }

          .login-image-content {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
            color: white;
          }

          .login-form {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .form-container {
            width: 100%;
            max-width: 250px;
            padding: 2rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            background-color: rgba(153, 242, 200, 0.9); 
            margin-left:100px;
          }

          .form-container h2 {
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .ant-form-item {
            margin-bottom: 1rem;
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
        <div className="background-animation">
          <Suspense fallback={<div>Loading...</div>}>
            <Animated />
          </Suspense>
        </div>
        <div className="overlay" />
        <Row className="login-row">
          {/* Left side with welcome message */}
          <Col span={12} className="login-image">
            <div className="login-image-content">
              <h1>HELLO WELCOME</h1>
              <Link to="/signup">
                <Button style={{backgroundColor:'rgba(153, 242, 200)'}} htmlType="submit">
                  Sign up
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right side with login form */}
          <Col span={12} className="login-form">
            <div className="form-container">
              <Title level={2}>Login</Title>
              <Form name="login" layout="vertical">
                <Form.Item label="Username" name="username">
                  <Input placeholder="username" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input.Password placeholder="password" />
                </Form.Item>
                <Form.Item>
                  <Link to="/">
                    <Button  type="primary" htmlType="submit" block>
                      Login
                    </Button>
                  </Link>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
