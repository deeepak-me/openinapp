import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import AddUser from "../../components/adduser/AddUser";

import AddProfile from "../../components/addprofile/AddProfile";
import { likes, revenue, transaction, users } from "../../data/data";
import BarChartBox from "../../components/barchart/BarChartBox";
import axios from "axios";
import UserCard from "../../components/usercard/UserCard";

const Home = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  const [currProfile, setCurrProfile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res.data);
        setCurrProfile(res.data[res.data.length - 1]);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    console.log(currProfile);
  }, []);

  const handleSubmit = async (profile) => {
    try {
      const response = await axios.post("http://localhost:8000/users", profile);

      setCurrProfile(response.data);

      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
        </div>
        <div className="center">
          <BarChartBox />
        </div>
        <div className="bottom">
          <Featured />

          {!currProfile ? (
            <AddUser onClick={() => setOpen(true)} />
          ) : (
            <UserCard currProfile={currProfile} />
          )}
        </div>

        {open && (
          <AddProfile onClose={() => setOpen(false)} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Home;
