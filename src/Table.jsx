import { Table, Typography, Image } from 'antd';
import { users } from './data';


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
   
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>

  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    filters: [
      {
        text: 'manukyaneghishe@gmail.com',
        value: 'manukyaneghishe@gmail.com',
      },
      {
        text: 'dfgfgdfg@gmail.com',
        value: 'dfgfgdfg@gmail.com',
      },
    ],
    onFilter: (value, record) => record.email.includes(value)
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate',
    sorter: (a,b) => a.rate - b.rate,

  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: text => <Image width={60} src={text} />
  },
]

const dataUsers = users.map(el => ({...el, key: el.id}))

const _Table = () => {
  return (
    <Table 
      columns={columns} 
      dataSource={users} 
      pagination={{ defaultPageSize: 6, showSizeChanger: true, pageSizeOptions: [2, 4, 6]}}
    />
  )
}

export default _Table