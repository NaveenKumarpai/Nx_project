import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Card, Button, message, Drawer, Form, Input, DatePicker, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Column } = Table;
const { Option } = Select;

const View = () => {
  const [data, setData] = useState<any[]>([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<moment.Moment | null>(null);
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/User/getUsers');
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        message.error('Failed to fetch data');
      }
    } catch (error) {
      message.error('Failed to fetch data');
      console.error('Fetch error:', error);
    }
  };

  const handleEdit = (record: any) => {
    setCurrentUser(record);
    setFirstName(record.firstName);
    setLastName(record.lastName);
    setDateOfBirth(moment(record.dateOfBirth));
    setGender(record.gender);
    setEmail(record.email);
    setPhoneNumber(record.phoneNumber);
    setCourse(record.course);
    setDrawerVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/User/deleteUser/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        message.success('User deleted successfully');
        setData(data.filter(user => user.id !== id));
      } else {
        message.error('Failed to delete user');
      }
    } catch (error) {
      message.error('Failed to delete user');
      console.error('Delete error:', error);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleSave = async () => {
    const updatedUser = {
      ...currentUser,
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dateOfBirth.format('YYYY-MM-DD') : '',
      gender,
      email,
      phoneNumber,
      course
    };

    try {
      const response = await fetch(`http://localhost:5000/User/updateUser/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      });

      if (response.ok) {
        message.success('User updated successfully');
        fetchData();
        setDrawerVisible(false);
      } else {
        message.error('Failed to update user');
      }
    } catch (error) {
      message.error('Failed to update user');
      console.error('Update error:', error);
    }
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g,'');
    if (numericValue.length <= 10) {
      setPhoneNumber(numericValue);
    }
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, '');
    setFirstName(alphabeticValue);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, '');
    setLastName(alphabeticValue);
  };

  return (
    <div className="page-container">
      <Card
        title={<span style={{ color: 'white' }}>Registered Students List</span>}
        extra={
          <Link to="/">
            <span style={{ color: 'white' }}>
              <Button type="primary">Back</Button>
            </span>
          </Link>
        }
        headStyle={{ backgroundColor: '#69c0ff', border: 0 }}
      >
        <Table className="custom-table-wrapper" dataSource={data} rowKey="id">
        <Column title="S.No" dataIndex="sNo" key="sNo" width={70} render={(text, record, index) => (
    <span>{index + 1}</span>
  )} />
          <Column title="Id" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
          <Column
            title="Date of Birth"
            dataIndex="dateOfBirth"
            key="dateOfBirth"
            render={(dateOfBirth: string) => (
              <span>{moment(dateOfBirth).format('YYYY-MM-DD')}</span>
            )}
          />
          <Column title="Gender" dataIndex="gender" key="gender" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
          <Column title="Course" dataIndex="course" key="course" />
          <Column
            title="Actions"
            key="actions"
            render={(record:any) => (
              <span>
                <Button
                  type="link"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(record)}
                />
                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(record.id)}
                />
              </span>
            )}
          />
        </Table>
      </Card>

      <Drawer
        title="Edit User"
        width={400}
        onClose={handleCloseDrawer}
        visible={drawerVisible}
        destroyOnClose={true}
      >
        {currentUser && (
          <Form layout="vertical">
            <Form.Item label="First Name">
              <Input value={firstName} onChange={handleFirstNameChange} />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input value={lastName} onChange={handleLastNameChange} />
            </Form.Item>
            <Form.Item label="Date of Birth">
              <DatePicker
                value={dateOfBirth}
                onChange={date => setDateOfBirth(date)}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item label="Gender">
              <Select value={gender} onChange={value => setGender(value)}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Email">
              <Input value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
            </Form.Item>
            <Form.Item label="Course">
              <Select value={course} onChange={value => setCourse(value)}>
                <Option value="commerce">Commerce</Option>
                <Option value="arts">Arts</Option>
                <Option value="maths">Maths</Option>
                <Option value="science">Science</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={handleSave}>Save</Button>
            </Form.Item>
          </Form>
        )}
      </Drawer>
    </div>
  );
};

export default View;
