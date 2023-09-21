import React from "react";

import "./featured.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Basic Tees", value: 55, color: "#98D89E" },
  { name: "Custom Short Pants", value: 31, color: "#F6DC7D" },
  { name: "Super Hoodies", value: 14, color: "#EE8484" },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Featured = () => {
  return (
    <div className="featured">
      <div className="left">
        <div className="top">
          <h1>Top Products</h1>
        </div>

        <div className="featuredChart">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="right">
        <p>May - June 2021</p>
        <div className="options">
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <div className="content">
                  <span className="name">{item.name}</span>
                  <span className="value">{item.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
