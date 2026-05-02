import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { tickets } from "../data";

function TicketDetail() {
  const { id } = useParams();
  const location = useLocation();
  const ticket = tickets.find((t) => t.id === id);
  const navigate = useNavigate();
  const search = location.state?.search || "";

  if (!ticket) {
    return <div className="not-found-message">Ticket not found.</div>;
  }

  return (
    <div className="ticket-detail">
      <div className="ticket-detail-header">
        <button
          onClick={() => navigate(`..${search}`)}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          Back to all tickets
        </button>
        <div>
          <h3>{ticket.subject}</h3>
          <div className="ticket-detail-meta">
            <span className={`badge badge-${ticket.status}`}>
              {ticket.status}
            </span>
            <span className={`priority priority-${ticket.priority}`}>
              {ticket.priority}
            </span>
            <span className="ticket-customer">👤 {ticket.customer}</span>
            <span className="ticket-date">📅 {ticket.createdAt}</span>
          </div>
        </div>
      </div>

      <div className="detail-tabs">
        <NavLink
          to={"."}
          className={({ isActive }) =>
            isActive ? "detail-tab active" : "detail-tab"
          }
          end
        >
          <div className="">Details</div>
        </NavLink>
        <NavLink
          to={"activity"}
          className={({ isActive }) =>
            isActive ? "detail-tab active" : "detail-tab"
          }
        >
          <div className="">Activity</div>
        </NavLink>
      </div>

      <div className="detail-tab-content">
        <Outlet />
      </div>
    </div>
  );
}

export default TicketDetail;
