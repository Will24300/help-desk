import { useParams } from "react-router-dom";
import { tickets } from "../data";

function TicketActivity() {
  const { id } = useParams();
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) return null;

  return (
    <div className="ticket-activity">
      <h4>Activity Log</h4>
      <div className="activity-timeline">
        {ticket.activity.map((entry, index) => (
          <div key={index} className="activity-entry">
            <div className="activity-dot"></div>
            {index < ticket.activity.length - 1 && (
              <div className="activity-line"></div>
            )}
            <div className="activity-content">
              <div className="activity-header">
                <span className="activity-author">{entry.author}</span>
                <span className="activity-time">{entry.timestamp}</span>
              </div>
              <p className="activity-message">{entry.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketActivity;
