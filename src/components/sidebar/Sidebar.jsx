import "./sidebar.scss";

import DashboardIcon from "../../images/dashboard.svg";
import ScheduleIcon from "../../images/schedule.svg";
import TransactionIcon from "../../images/transaction.svg";
import UserIcon from "../../images/user.svg";
import SettingIcon from "../../images/setting.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Board.</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <img src={DashboardIcon} className="icon" />
              <span style={{ color: "#FFFFFF" }}>Dashboard</span>
            </li>
          </Link>

          <li>
            <img src={TransactionIcon} className="icon" />
            <span>Transactions</span>
          </li>

          <li>
            <img src={ScheduleIcon} className="icon" />
            <span>Schedules</span>
          </li>

          <li>
            <img src={UserIcon} className="icon" />
            <span>Users</span>
          </li>
          <li>
            <img src={SettingIcon} className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Sidebar;
