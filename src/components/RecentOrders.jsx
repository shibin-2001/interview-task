import { Avatar, Card, Table } from "antd";
import React from "react";
import { OrderDetails } from "../utils/data";

const RecentOrders = () => {
  const columns = [
    {
      title: "Customer",
      render: (row) => (
        <div>
          <Avatar
            style={{ background: "#45464b" }}
            size="small"
            src={row.customerimage}
          />{" "}
          {row.customer}
        </div>
      ),
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render:(val)=>val === 'Delivered' ? <p style={{background:'green',color:'#fff',borderRadius:20,textAlign:'center',margin:0,padding:5}}>{val}</p> : <p style={{background:'red',color:'#fff',borderRadius:20,textAlign:'center',margin:0,padding:5}}>{val}</p>
    },
  ];
  const headerStyle = {
    background: "#202028",
    color: "#fff",
  };

  const cellStyle = {
    background: "#202028",
    color: "#fff",
    borderWidth:0.5,
  };
  return (
    <Card
      style={{
        background: "#202028",
        border: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      styles={{ body: { padding: "10px" } }}
    >
      <Table
        style={{ background: "#202028" }}
        dataSource={OrderDetails}
        columns={columns.map((column) => ({
          ...column,
          onHeaderCell: () => ({
            style: headerStyle,
          }),
          onCell: () => ({
            style: cellStyle,
          }),
        }))}
        pagination={false}
      />
      ;
    </Card>
  );
};

export default RecentOrders;
