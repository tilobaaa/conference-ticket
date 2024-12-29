/* eslint-disable react/prop-types */

import logo from "/assets/images/logo-full.svg";
import ticket from "/assets/images/pattern-ticket.svg";
import "./TicketCard.css";
export default function TicketCard({ name, githubHandle, imgUrl }) {
  return (
    <div className="ticket-card">
      <img className="main-img" src={ticket} alt="" />
      <div className="text-overlay">
        <div className="event-info">
          <img src={logo} alt="" />
          <p>Jan 31, 2025 / Austin, TX</p>
        </div>
        <div className="profile">
          <img src={imgUrl} alt="avatar" />
          <div>
            <h4>{name}</h4>
            <p>{githubHandle}</p>
          </div>
        </div>
      </div>

      <div className="ticket-number">#01639</div>
    </div>
  );
}
