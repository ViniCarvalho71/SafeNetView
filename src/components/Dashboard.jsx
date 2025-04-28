
import  DashContainer  from './DashContainer';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <DashContainer 
        sidebar={<Sidebar />} 
        content={<div>Conteúdo do Dashboard</div>} 
      />
  
    );
}

export default Dashboard;