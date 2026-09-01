import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../data/mockData";

function Analytics() {
  return (
    <section className="page-content">

      <div className="page-heading">
        <div>
          <h2>Analytics</h2>
          <p>
            Monitor revenue, orders, and business performance.
          </p>
        </div>

        <div className="date-badge">
          📊 Performance
        </div>
      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <div className="section-heading">
            <div>
              <h3>Revenue Performance</h3>
              <p>Monthly revenue comparison</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip
                formatter={(value) =>
                  `$${Number(value).toLocaleString()}`
                }
              />

              <Bar
                dataKey="revenue"
                fill="#4f46e5"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-card">
          <div className="section-heading">
            <div>
              <h3>Order Performance</h3>
              <p>Monthly order volume</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="orders"
                fill="#16a34a"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div className="insight-card">
        <div className="insight-icon">💡</div>

        <div>
          <h3>Business Insight</h3>

          <p>
            Revenue and order volume are showing a positive
            upward trend. June recorded the strongest
            performance in the current reporting period.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Analytics;