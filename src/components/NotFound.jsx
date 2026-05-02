import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        {/* trainees: make this navigate back to the home page */}
        <Link to={"/"} className="back-home-link">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
