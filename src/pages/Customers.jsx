import { useState } from "react";
import { customersData } from "../data/mockData";

function Customers() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const filteredCustomers = [...customersData]
    .filter((customer) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        customer.name.toLowerCase().includes(searchValue) ||
        customer.email.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" ||
        customer.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (valueA < valueB) {
        return sortConfig.direction === "ascending"
          ? -1
          : 1;
      }

      if (valueA > valueB) {
        return sortConfig.direction === "ascending"
          ? 1
          : -1;
      }

      return 0;
    });

  function handleSort(key) {
    let direction = "ascending";

    if (
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({
      key,
      direction,
    });
  }

  return (
    <section className="page-content">

      <div className="page-heading">
        <div>
          <h2>Customers</h2>

          <p>
            Manage and analyze your customer information.
          </p>
        </div>

        <div className="customer-count">
          {filteredCustomers.length} Customers
        </div>
      </div>

      <div className="customer-controls">

        <div className="search-wrapper">
          🔎

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>

              <th onClick={() => handleSort("name")}>
                Name ↕
              </th>

              <th onClick={() => handleSort("email")}>
                Email ↕
              </th>

              <th onClick={() => handleSort("status")}>
                Status ↕
              </th>

              <th onClick={() => handleSort("revenue")}>
                Revenue ↕
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>

                <td>
                  <div className="customer-name">
                    <div className="customer-avatar">
                      {customer.name.charAt(0)}
                    </div>

                    <span>{customer.name}</span>
                  </div>
                </td>

                <td>{customer.email}</td>

                <td>
                  <span
                    className={`status status-${customer.status.toLowerCase()}`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td>
                  <strong>
                    ${customer.revenue.toLocaleString()}
                  </strong>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {filteredCustomers.length === 0 && (
          <div className="no-results">
            <div>🔍</div>
            <h3>No customers found</h3>
            <p>
              Try changing your search or filter.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}

export default Customers;