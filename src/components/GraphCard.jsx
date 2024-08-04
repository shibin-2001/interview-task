import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { graphData } from "../utils/data";

// constants

const GraphCard = () => {
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
      <ResponsiveContainer width="100%" height="100%" minHeight={150}>
        <BarChart
          width={500}
          height={200}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          barCategoryGap={10}
        >
          <CartesianGrid horizontal={true} vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis axisLine={false}  />
          {/* <Tooltip shared={false} trigger="click" /> */}
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#8884d8" radius={20} />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default GraphCard;
