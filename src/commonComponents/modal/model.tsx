import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import { usersProfileData } from '../../utils/interfaces/typeInterfaces';

interface ModelProps {
  open: boolean;
  onUpdate: (values: usersProfileData) => void;
  onCancel: () => void;
  initialData: usersProfileData
}

export default function ModelCreateForm(props: ModelProps) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={props.open}
      title="Update Profile"
      okText="Update"
      cancelText="Cancel"
      onCancel={props.onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            props.onUpdate(values);
            props.onCancel();
            form.setFieldsValue(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="updateUserProfile"
        initialValues={props.initialData}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="jobPosition" label="Designation">
          <Input />
        </Form.Item>
        <Form.Item name="companyName" label="Company Name">
          <Input />
        </Form.Item>
        <Form.Item name="telephone" label="Phone Number">
          <Input />
        </Form.Item>
        <Form.Item name="about" label="About you">
          <Input.TextArea showCount maxLength={300} />
        </Form.Item>
        <Form.Item name="mailSetting" className="collection-create-form_last-form-item" label='Receive job application via'>
          <Radio.Group>
            <Radio value="dashboard">Only on my dashboard</Radio>
            <Radio value="emailDash">Email and Dashboard</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};