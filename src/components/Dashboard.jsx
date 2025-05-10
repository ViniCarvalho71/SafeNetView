import DashContainer from "./DashContainer";
import Sidebar from "./Sidebar";

const Dashboard = ({ dashboard_content }) => {
  return <DashContainer sidebar={<Sidebar />} 
  content={dashboard_content} />;
};

export default Dashboard;
