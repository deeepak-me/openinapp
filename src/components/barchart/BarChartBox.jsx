import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./barchartbox.scss";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const BarChartBox = () => {
  return (
    <div className="barChartBox">
      <div className="headings">
        <h1>Activities</h1>
        <h2>May - June 2021</h2>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height={350}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#98D89E"
              contentStyle={{ borderRadius: "15px" }}
            />
            <Bar dataKey="uv" fill="#EE8484" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
