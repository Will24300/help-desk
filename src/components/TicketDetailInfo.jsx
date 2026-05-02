import { useParams } from "react-router-dom";
import { tickets } from "../data";

function TicketDetailInfo() {
  const { id } = useParams();

  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) return null;

  return (
    <div className="ticket-info">
      <div className="info-section">
        <h4>Description</h4>
        <p>{ticket.description}</p>
      </div>

      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Customer</span>
          <span className="info-value">{ticket.customer}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Status</span>
          <span className={`badge badge-${ticket.status}`}>
            {ticket.status}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Priority</span>
          <span className={`priority priority-${ticket.priority}`}>
            {ticket.priority}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Created</span>
          <span className="info-value">{ticket.createdAt}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Ticket ID</span>
          <span className="info-value">#{ticket.id}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Last Activity</span>
          <span className="info-value">
            {ticket.activity[ticket.activity.length - 1]?.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TicketDetailInfo;
