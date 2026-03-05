import { useState } from 'react';
import { genTicket, sum } from './helper';

export default function Lottery({ numDigits = 3, winningSum = 15 }) {
    const [ticket, setTicket] = useState(genTicket(numDigits));

    const isWinning = sum(ticket) === winningSum;

    const buyTicket = () => {
        setTicket(genTicket(numDigits));
    };

    return (
        <div className="lottery-card">
            <h1 className="title">Luck & Destiny ✨</h1>
            <p className="description">
                Match the sum of {winningSum} to win!
            </p>

            <div className={`ticket-display ${isWinning ? 'winning-pulse' : ''}`}>
                {ticket.map((num, i) => (
                    <span key={i} className="ticket-num">{num}</span>
                ))}
            </div>

            <button className="buy-btn" onClick={buyTicket}>
                Generate Ticket 🎲
            </button>

            <div className={`status ${isWinning ? 'win' : 'lose'}`}>
                {isWinning ? (
                    <span>🎉 Congratulations! You won the lottery! 💰</span>
                ) : (
                    <span>Try again! No Winning 😢</span>
                )}
            </div>
        </div>
    );
}
