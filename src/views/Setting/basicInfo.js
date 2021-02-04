import { Card, Form, Input, Button, Select, Space, Radio, Upload, Spin, message  } from 'antd'
import React from 'react'
import {
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { ROLES } from './constants'

import style from './style.module.scss'


const { $http } = React

const defaultAvatar = require('@assets/images/default.png')
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}

function  beforeUpload (file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const footerLayout = {
  wrapperCol: {
    offset: 4,
    span: 16
  }
}
const EmailRegexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const PhoneRegexp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/



class BasicInfo extends React.Component{
  constructor() {
    super()
    this.state = {
      loading: false,
      imageUrl: defaultAvatar,
      spinning: true,
      form: {
        role: '',
        username: '',
        nickname: '',
        sex: 0,
        avatar: '',
        phone: '',
        email: '',
        remark: ''
      }
    }
  }

  componentDidMount() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {}
    $http.get('user/details/' + userInfo.userId).then((res) => {
      console.log(res)
      this.setState({
        imageUrl: res.avatar,
        spinning: false
      })
      this.formRef.current.setFieldsValue(res)
    }).catch((err) => {
      console.log(err)
    });
  }

  formRef = React.createRef()

  handleSubmit = (values) => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {}
    values.userId = userInfo.userId
    this.setState({spinning: true})
    $http.put('user/edit', values).then(res => {
      this.setState({ spinning: false})
      message.success('修改成功')
    })

  }

  handleReset = () => {
    this.formRef.current.resetFields()
    this.setState({imageUrl: ''})
  }

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined/> : <PlusOutlined/>}
        <div className="ant-upload-text">上传</div>
      </div>
    )
    const { imageUrl, spinning } = this.state

    return(
      <div>
        <Card title="设置我的资料">
          <Spin spinning={spinning}>
            <Form {...layout} initialValues={this.state.form} ref={this.formRef} name="control-ref" onFinish={this.handleSubmit}>
              <Form.Item label="我的角色">
                <Form.Item name="role"
                  noStyle
                  style={{marginBottom: 0}}>
                  <Select>
                    {
                      ROLES.map(item => (
                        <Select.Option key={item.value} value={item.value} disabled={item.value === 0 ? false : true}>{item.label}</Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
                <span className="ant-form-text">
                  <span className="text-grey-9">当前角色不可更改为其他角色</span>
                </span>
              </Form.Item>
              <Form.Item label="用户名">
                <Form.Item name="username"
                  noStyle
                  style={{marginBottom: 0}}>
                  <Input readOnly />
                </Form.Item>
                <span className="ant-form-text">
                  <span className="text-grey-9">不可修改。一般用于后台登入名</span>
                </span>
              </Form.Item>
              <Form.Item label="昵称">
                <Form.Item name="nickname"
                  noStyle
                  style={{marginBottom: 0}}>
                  <Input />
                </Form.Item>
              </Form.Item>
              <Form.Item label="性别">
                <Form.Item name="sex"
                  noStyle
                  style={{marginBottom: 0}}>
                  <Radio.Group>
                    <Radio value={0}>男</Radio>
                    <Radio value={1}>女</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form.Item>
              <Form.Item label="头像" name="avatar" valuePropName="avatar" className={style['avatar']}>
              <Upload
                name="file"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
              </Form.Item>
              <Form.Item label="手机" name="phone"
                rules={[
                  { pattern: PhoneRegexp, message: '手机格式不正确'}
                ]}>
                <Input />
              </Form.Item>
              <Form.Item label="邮箱" name="email"
                rules={[
                  { pattern: EmailRegexp, message: '邮箱格式不正确'}
                ]}>
                <Input />
              </Form.Item>
              <Form.Item label="备注" name="remark">
                <Input.TextArea rows={4} placeholder="请输入内容" />
              </Form.Item>
              <Form.Item {...footerLayout}>
                <Space size={20}>
                  <Button type="primary" htmlType="submit">保存</Button>
                  <Button htmlType="button" onClick={this.handleReset}>重新填写</Button>
                </Space>
              </Form.Item>
            </Form>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default BasicInfo