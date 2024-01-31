import React, { useState } from 'react';
import { Table, Button, Space, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './LoanStatus.css'
import NavBar1 from '../NavBar1';
import Header from './Header'
const LoanManagementTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      customerName: '1 DAY',
      customerEmail:'hasheem@gmail.com',
      customerNumber:'9555222263',
      totalAmount: 89600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 2,
      customerName: '2 MONTHS',
      customerEmail:'nallu@gmail.com',
      customerNumber:'9080665522',
      totalAmount: 7500,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 3,
      customerName: '1 YEAR',
      customerEmail:'gbi@gmail.com',
      customerNumber:'8555252456',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    // Add more static data as needed
    {
      id: 4,
      customerName: '2 DAYS',
      customerEmail:'mahi@gmail.com',
      customerNumber:'12365478290',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 5,
      customerName: '3 WEEKS',
      customerEmail:'king@gmail.com',
      customerNumber:'9855522493',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 6,
      customerName: '5 MONTHS',
      customerEmail:'hitman@gmail.com',
      customerNumber:'8597525936',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 7,
      customerName: '10 DAYS',
      customerEmail:'master@gmail.com',
      customerNumber:'9861524563',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 8,
      customerName: '14 MONTHS',
      customerEmail:'wall@gmail.com',
      customerNumber:'9861563985',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 9,
      customerName: '3 YEARS',
      customerEmail:'boom@gmail.com',
      customerNumber:'9615245361',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
  ]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      title: 'USER  ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'VALIDITY',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'EMAIL',
      dataIndex: 'customerEmail',
      key: 'customerEmail',
    },
    {
      title: 'CONTACT NUMBER',
      dataIndex: 'customerNumber',
      key: 'customerNumber',
    },
      
  ];

  const handleApprove = (record) => {
    showConfirmationModal('approve', record);
  };

  const handleReject = (record) => {
    showConfirmationModal('reject', record);
  };

  const showConfirmationModal = (action, record) => {
    Modal.confirm({
      title: `Are you sure you want to ${action} the loan for Order ID ${record.id}?`,
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        // Handle the approval or rejection logic here
        message.success(`Loan for Order ID ${record.id} has been ${action}ed.`);
        updateDataSource(record);
      },
    });
  };

  const updateDataSource = (record) => {
    // Update the dataSource to reflect the approval or rejection
    const updatedDataSource = dataSource.filter((item) => item.id !== record.id);
    setDataSource(updatedDataSource);
  };

  const onSelectChange = (selectedKeys, selectedRows) => {
    setSelectedRowKeys(selectedKeys);
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleBulkApprove = () => {
    // Handle bulk approval logic using selectedRows
    message.success(`${selectedRows.length} loans have been approved.`);
    clearSelection();
  };

  const handleBulkReject = () => {
    // Handle bulk rejection logic using selectedRows
    message.success(`${selectedRows.length} loans have been rejected.`);
    clearSelection();
  };

  const clearSelection = () => {
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  return (
    <div className='App1'>
   <NavBar1/>
    <div className="SideMenuAndPageContent">
    <Header/>
    
    <div className="das">
      <Table 
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        style={{marginTop:'50px',width:'1000px'}}
      />
      {selectedRowKeys.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={handleBulkApprove} style={{backgroundColor:'green'}}>
            Bulk Approve
          </Button>
          <Button type="danger" onClick={handleBulkReject} style={{ marginLeft: 8}}>
            Bulk Reject
          </Button>
        </div>
      )}
    </div></div></div>
  );
};

export default LoanManagementTable;
