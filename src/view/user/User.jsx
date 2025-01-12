import {useEffect, useRef, useState} from "react";
import {getUsers} from "../../axios/api";
import "./User.sass";
import {Button, DatePicker, Form, Input, InputNumber, Modal, Radio, Table} from "antd";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";
import {useImmer} from "use-immer";
import dayjs from "dayjs";

const User = ()=> {
    // 基础信息
    const [inputValue, setInputValue] = useState("")
    const [usersInfo, setUsersInfo] = useImmer({})
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '出生日期',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'action',
            render: (record) => (
                <div className={"actionButton"}>
                    <Button onClick={()=>showUpdate(record)} color={"cyan"} variant="solid">编辑</Button>
                    <Button onClick={()=>showDelete(record)} type="primary" danger>删除</Button>
                </div>
            ),
        }
    ]
    // 弹窗修改信息
    const [userInfoUpdate, setUserInfoUpdate] = useImmer({})
    // 弹窗删除信息
    const [userInfoDelete, setUserInfoDelete] = useImmer({})

    // 添加弹窗
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // 修改弹窗
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [updateForm] = Form.useForm();
    const showUpdate = (record) => {
        setUserInfoUpdate(draft => {
            draft.name = record.name
            draft.age = record.age
            draft.sex = record.sex
            draft.birthday = record.birthday
            draft.address = record.address
        })
        let sign = record.sex === "男" ? 1 : 2
        updateForm.setFieldValue("username", record.name)
        updateForm.setFieldValue("age", record.age)
        updateForm.setFieldValue("sex", sign)
        updateForm.setFieldValue("birthday", dayjs(record.birthday))
        updateForm.setFieldValue("address", record.address)
        setIsUpdateOpen(true);
    };
    const handleUpdateOk = () => {
        setIsUpdateOpen(false);
    };
    const handleUpdateCancel = () => {
        setIsUpdateOpen(false);
    };

    // 删除弹窗
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const showDelete = (record) => {
        setUserInfoDelete(draft => {
            draft.id = record.id
        })
        setIsDeleteOpen(true);
    };
    const handleDeleteOk = () => {
        setUsersInfo(draft => {
            draft.data = draft.data.filter(item => item.id !== userInfoDelete.id)
        })
        setIsDeleteOpen(false);
    };
    const handleDeleteCancel = () => {
        setIsDeleteOpen(false);
    }

    useEffect(() => {
        getUsers().then(res => {
            let data = res?.data?.list
            setUsersInfo(draft => {
                draft.data = data
                draft.columns = columns
            })
        })
    }, []);
    useEffect(()=>{console.log(inputValue)}, [inputValue])

    return <>
        <div className={"homeUser"}>
            <div className={"userHead"}>
                <Button type="primary" onClick={showModal} icon={<PlusOutlined  />}>新增</Button>
                <div className={"userSearch"}>
                    <Input
                        placeholder="搜索"
                        size={"middle"}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button type="primary" icon={<SearchOutlined /> }>查询</Button>
                </div>
            </div>
            {usersInfo?.data?.length > 0 ?
                <Table className={"userTable"} columns={usersInfo.columns} dataSource={usersInfo.data} />
                :
                <Table className={"userTable"} columns={columns}/>}
        </div>
        {/* 添加弹窗 */}
        <Modal title="添加用户信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 10,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: false,
                }}
                autoComplete="off"
                clearOnDestroy={true}
            >
                <Form.Item
                    label="姓名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的名字!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="年龄"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的年龄!',
                        },
                    ]}
                >
                    <InputNumber  min={1} max={100} />
                </Form.Item>

                <Form.Item
                    label="性别"
                    name="sex"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的性别!',
                        },
                    ]}
                >
                    <Radio.Group >
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="出生日期"
                    name="birtyday"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的生日!',
                        },
                    ]}
                >
                    <DatePicker  />
                </Form.Item>

                <Form.Item
                    label="地址"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的地址!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
        {/* 修改弹窗 */}
        <Modal title="修改用户信息" open={isUpdateOpen}  onOk={handleUpdateOk} onCancel={handleUpdateCancel}>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 10,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: false,
                }}
                autoComplete="off"
                form={updateForm}
            >
                <Form.Item
                    label="姓名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的名字!',
                        },
                    ]}

                >
                    <Input value={userInfoUpdate.name}/>
                </Form.Item>

                <Form.Item
                    label="年龄"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的年龄!',
                        },
                    ]}
                >
                    <InputNumber  min={1} max={100} value={userInfoUpdate.age} />
                </Form.Item>

                <Form.Item
                    label="性别"
                    name="sex"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的性别!',
                        },
                    ]}
                >
                    <Radio.Group value={userInfoUpdate.sex}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="出生日期"
                    name="birthday"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的生日!',
                        },
                    ]}
                >
                    <DatePicker  value={userInfoUpdate.birthday}/>
                </Form.Item>

                <Form.Item
                    label="地址"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: '请输入你的地址!',
                        },
                    ]}
                >
                    <Input value={userInfoUpdate.address}/>
                </Form.Item>
            </Form>
        </Modal>
        {/* 删除弹窗 */}
        <Modal title="删除用户信息" open={isDeleteOpen} onOk={handleDeleteOk} onCancel={handleDeleteCancel}>
            <div>
                <p>确定删除该用户吗？</p>
            </div>
        </Modal>
    </>
}

export default User