import React from 'react';
import { sortDateStrings, formatAmount } from 'utils.js';

const Month = ({ month, monthPoints, transactions }) => (
  <React.Fragment>
    <h3>
      {month} points: {monthPoints}
    </h3>
    <div>Transactions:</div>
    {sortDateStrings(transactions).map(({ date, amount }, index) => (
      <div key={`${date}-${index}`} className="transaction">
        <span>{date}</span>
        <span>{formatAmount(amount)}</span>
      </div>
    ))}
  </React.Fragment>
);

export default Month;
