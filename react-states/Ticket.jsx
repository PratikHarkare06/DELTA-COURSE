import React from "react";
import "./Ticket.css";
import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <p>{ticket.description}</p>
      <div className="ticketNum">
        {ticket.numbers.map((number, index) => (
          <TicketNum key={index} num={number} />
        ))}
      </div>
    </div>
  );
}
