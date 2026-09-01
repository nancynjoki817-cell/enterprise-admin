import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";

function Dashboard() {
  return (
    <section className="dashboard-content">

      <div className="stats-grid">

        <StatCard
          title="Total Revenue"
          value="$84,520"
          change="+12.5%"
          icon="💰"
        />

        <StatCard
          title="Total Orders"
          value="1,248"
          change="+8.2%"
          icon="🛒"
        />

        <StatCard
          title="Total Customers"
          value="8,420"
          change="+15.3%"
          icon="👥"
        />

        <StatCard
          title="Conversion Rate"
          value="4.8%"
          change="+2.4%"
          icon="📈"
        />

      </div>

      <div className="chart-section">

        <h2>Revenue Overview</h2>

        <p>Monthly revenue performance</p>

        <SalesChart />

      </div>

    </section>
  );
}

export default Dashboard;