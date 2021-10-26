import React from 'react';
import {Table} from 'antd';

const dataSource = [
    {
        id: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        id: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    ];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        id: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        id: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        id: 'address',
    },
];

const Dashboard = () => {
    return (
        <div>
            <h1>dashboard</h1>
            <div>
            

            <Table dataSource={dataSource} columns={columns} />;
            </div>
        </div>
    )
}

export default Dashboard
