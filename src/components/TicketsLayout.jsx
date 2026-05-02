import { Outlet } from "react-router-dom";

function TicketsLayout() {
  return (
    <div className="tickets-layout">
      <div className="page-header">
        <h2>Support Tickets</h2>
        <p className="page-subtitle">Manage and track customer issues</p>
      </div>

      <div className="tickets-content">
        <Outlet />
      </div>
    </div>
  );
}

export default TicketsLayout;
