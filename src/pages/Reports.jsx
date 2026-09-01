import { revenueData } from "../data/mockData";

function Reports() {
  const totalRevenue = revenueData.reduce(
    (total, item) => total + item.revenue,
    0
  );

  const totalOrders = revenueData.reduce(
    (total, item) => total + item.orders,
    0
  );

  const averageOrderValue =
    totalRevenue / totalOrders;

  function exportReport() {
    const headers = [
      "Month",
      "Revenue",
      "Orders",
      "Average Order",
    ];

    const rows = revenueData.map((item) => [
      item.month,
      item.revenue,
      item.orders,
      Math.round(item.revenue / item.orders),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "enterprise-business-report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <section className="page-content">

      <div className="page-heading">
        <div>
          <h2>Reports</h2>

          <p>
            Review enterprise business performance and reports.
          </p>
        </div>

        <button
          className="download-button"
          onClick={exportReport}
        >
          ⬇ Export Report
        </button>
      </div>

      <div className="report-stats">

        <div className="report-card">
          <span>💰</span>

          <p>Total Revenue</p>

          <h3>
            ${totalRevenue.toLocaleString()}
          </h3>
        </div>

        <div className="report-card">
          <span>🛒</span>

          <p>Total Orders</p>

          <h3>
            {totalOrders.toLocaleString()}
          </h3>
        </div>

        <div className="report-card">
          <span>📊</span>

          <p>Average Order</p>

          <h3>
            ${Math.round(averageOrderValue).toLocaleString()}
          </h3>
        </div>

      </div>

      <div className="report-table">

        <div className="report-table-header">

          <div>
            <h3>Monthly Performance</h3>

            <p>
              Revenue and order summary
            </p>
          </div>

          <span className="report-status">
            ● Updated
          </span>

        </div>

        <table>

          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Orders</th>
              <th>Average Order</th>
            </tr>
          </thead>

          <tbody>

            {revenueData.map((item) => (
              <tr key={item.month}>

                <td>
                  <strong>{item.month}</strong>
                </td>

                <td>
                  ${item.revenue.toLocaleString()}
                </td>

                <td>
                  {item.orders.toLocaleString()}
                </td>

                <td>
                  $
                  {Math.round(
                    item.revenue / item.orders
                  ).toLocaleString()}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Reports;