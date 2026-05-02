import { Link, NavLink, useSearchParams } from "react-router-dom";
import { tickets } from "../data";

function TicketsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("type");
  const status = ["open", "closed", "in-progress"];
  const filteredTickets = filter
    ? tickets.filter((ticket) => ticket.status === filter)
    : tickets;

  return (
    <div className="tickets-list">
      <div className="buttons-status">
        {status.map((status, index) => (
          <button
            className={filter === status ? "active" : ""}
            key={index}
            onClick={() => setSearchParams({ type: status })}
          >
            {status}
          </button>
        ))}
        <p
          onClick={() => setSearchParams({})}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Clear all
        </p>
      </div>
      {filteredTickets.map((ticket) => (
        <Link
          to={`${ticket.id}`}
          key={ticket.id}
          state={{ search: `?${searchParams.toString()}` }}
        >
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-card-header">
              <h3 className="ticket-subject">{ticket.subject}</h3>
              <span className={`badge badge-${ticket.status}`}>
                {ticket.status}
              </span>
            </div>
            <div className="ticket-card-meta">
              <span className="ticket-customer">👤 {ticket.customer}</span>
              <span className={`priority priority-${ticket.priority}`}>
                {ticket.priority}
              </span>
              <span className="ticket-date">📅 {ticket.createdAt}</span>
            </div>
            <p className="ticket-preview">
              {ticket.description.substring(0, 120)}...
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TicketsList;
