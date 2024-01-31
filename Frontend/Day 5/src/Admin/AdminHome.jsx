import {
  DollarCircleOutlined,
  EyeOutlined,
  ClockCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
import Header from './Header'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import NavBar1 from "../NavBar1";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminHome() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(2563);
      setRevenue(1000);
    });
    getInventory().then((res) => {
      setInventory(2000);
    });
    getCustomers().then((res) => {
      setCustomers(1000);
    });
  }, []);

  return (
  <div className='App1'>
   <NavBar1/>
    <div className="SideMenuAndPageContent">
    <Header/>
    
    <div className="das">
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>STATISTICS :</Typography.Title>
      <Space direction="horizontal" style={{minWidth:'870px'}}>
        <DashboardCard
          
          title={"NO OF USERS USED :"}
          value={orders}
        />
        <DashboardCard
          
          title={"NO OF RECHARGES DONE :"}
          value={inventory}
        />
        <DashboardCard
          
          title={"NO OF SIM CARDS SOLD :"}
          value={customers}
        />
        <DashboardCard 
          
          title={"NO OF FIBERS SOLD :"}
          value={revenue}
          style={{minWidth:'850px'}}
        />
        <DashboardCard
              
              title={"NO OF ADD ONS DONE :"}
              value={revenue}
            />
      </Space>
      <Space  style={{minWidth:'1070px'}}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
    </div>
    </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const staticDataSource = [
    {
      key: '1',
      title: 'PLAN ABC',
      quantity: 'CUSTOMER 101',
      discountedPrice: 'KEERTHANAN',
      approvalStatus: 'RS.666',
      approvaStatus: 'NETFLIX',
      
    },
    {
      key: '2',
      title: 'PLAN XYZ',
      quantity: 'CUSTOMER 104',
      discountedPrice: 'VISWANATHAN',
      approvalStatus: 'RS.745',
      approvaStatus: 'HOTSTAR',
      
    },
    {
      key: '4',
      title: 'PLAN LMN',
      quantity: 'CUSTOMER 106',
      discountedPrice: 'DHONI',
      approvalStatus: 'RS.256', approvaStatus: 'SUN NEXT',
      
    },
    {
      key: '5',
      title: 'PLAN PQR',
      quantity: 'CUSTOMER 107',
      discountedPrice: 'VIRAT',
      approvalStatus: 'RS.110', approvaStatus: 'JIO CINEMA',
      
    },{
      key: '3',
      title: 'PLAN GBI',
      quantity: 'CUSTOMER 105',
      discountedPrice: 'PRANESH',
      approvalStatus: 'RS.2024', approvaStatus: 'ZEE PLUS', 
      
    },
    
    // Add more static data as needed
  ];
  
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3)); 
      setLoading(false);
    });
  }, []);

  return (
    <div style={{width:'450px'}}>
    <Typography.Text>USER DETAILS :</Typography.Text>
      <Space direction="vertical" style={{ marginTop: '16px'}}>
        <Table
          columns={[
            {
              title: 'PLANS',
              dataIndex: 'title',
            },
            {
              title: 'CUSTOMER  ID',
              dataIndex: 'quantity',
            },
            {
              title: 'NAME',
              dataIndex: 'discountedPrice',
            },
            {
              title: 'AMOUNT',
              dataIndex: 'approvalStatus',
            },
            {
              title: ' ',
              dataIndex: 'approvaStatus',
            },
            
           
          ]}
          dataSource={staticDataSource}
          pagination={false}

          style={{width:'550px',height:'200px'}}
          
        />
      </Space>
      </div>
  );
}

function DashboardChart() {

 
}
export default AdminHome;
