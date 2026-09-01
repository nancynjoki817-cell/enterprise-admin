import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";

function Dashboard() {
  return (
    <section className="dashboard-content">

      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>
            Overview of your enterprise performance.
          </p>
        </div>

        <div className="date-badge">
          📅 Last 6 Months
        </div>
      </div>

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
        <div className="section-heading">
          <div>
            <h2>Revenue Overview</h2>
            <p>Monthly revenue performance</p>
          </div>

          <span className="trend-badge">
            ↑ 12.5%
          </span>
        </div>

        <SalesChart />
      </div>

      <div className="dashboard-bottom">
        <div className="quick-card">
          <div className="quick-icon">💼</div>
          <div>
            <h3>Business Performance</h3>
            <p>
              Revenue continues to grow steadily across
              the reporting period.
            </p>
          </div>
        </div>

        <div className="quick-card">
          <div className="quick-icon">🎯</div>
          <div>
            <h3>Conversion Goal</h3>
            <p>
              Current conversion rate is 4.8%, showing
              positive monthly growth.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Dashboard;