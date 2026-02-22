import { useState } from "react";

import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(getTicket(n));

  let isWinning = winCondition(ticket);

  let buyTickets = () => {
    setTicket(getTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTickets}>Buy Ticket</button>

      {isWinning && <h2>🎉 You Won!</h2>}
    </div>
  );
}
