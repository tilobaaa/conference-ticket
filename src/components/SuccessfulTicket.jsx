/* eslint-disable react/prop-types */
import logo from "/assets/images/logo-full.svg";
import TicketCard from "./TicketCard";
import "./SuccessfulTicket.css"



export default function SuccessfulTicket({userDetails, imgUrl}) {

  const {name, email, githubHandle} = userDetails;


  return (
    <div className="successful-ticket">
      <img src={logo} alt="Logo" />
      <h1>Congrats, <span>{name}!</span><br />Your ticket is ready.</h1>
      <p>We{"'"}ve emailed your ticket to <br/> <span>{email}</span> and we will send updates in<br />the run upto the event.</p>
      <TicketCard name={name} githubHandle={githubHandle} imgUrl={imgUrl}/>
    </div>
  )
}
