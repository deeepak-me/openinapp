import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import AddUser from "../../components/adduser/AddUser";
import Bar from "../../components/bar/Bar";
import AddProfile from "../../components/addprofile/AddProfile";
import { likes, revenue, transaction, users } from "../../data/data";
import BarChartBox from "../../components/barchart/BarChartBox";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget {...revenue} />
          <Widget {...transaction} />
          <Widget {...likes} />
          <Widget {...users} />
          {/* <Widget />
            <Widget />
            <Widget />
            <Widget /> */}
        </div>
        <div className="center">
          <BarChartBox />
        </div>
        <div className="bottom">
          <Featured />
          <AddUser onClick={() => setOpen(true)} />
        </div>
        {open && <AddProfile setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Home;
