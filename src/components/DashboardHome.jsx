import { tickets } from "../data";

function DashboardHome() {
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const inProgress = tickets.filter((t) => t.status === "in-progress").length;
  const closed = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className="dashboard">
      <div className="page-header">
        <h2>Dashboard</h2>
        <p className="page-subtitle">Overview of your support queue</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total Tickets</span>
        </div>
        <div className="stat-card stat-open">
          <span className="stat-number">{open}</span>
          <span className="stat-label">Open</span>
        </div>
        <div className="stat-card stat-progress">
          <span className="stat-number">{inProgress}</span>
          <span className="stat-label">In Progress</span>
        </div>
        <div className="stat-card stat-closed">
          <span className="stat-number">{closed}</span>
          <span className="stat-label">Closed</span>
        </div>
      </div>

      <div className="recent-section">
        <h3>Recent Tickets</h3>
        <table className="recent-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {tickets.slice(0, 4).map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.subject}</td>
                <td>{ticket.customer}</td>
                <td>
                  <span className={`badge badge-${ticket.status}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>
                  <span className={`priority priority-${ticket.priority}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>{ticket.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardHome;
