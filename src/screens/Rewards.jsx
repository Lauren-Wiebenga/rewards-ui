import React, { useState, useEffect } from 'react';
import { getRewardPoints } from 'requests/requests';
import Month from 'components/Month';

const Rewards = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [custTotals, setCustTotals] = useState([]);

  const getPointTotals = async () => {
    try {
      const result = await getRewardPoints();
      setCustTotals(result);
      setSelectedCustomer(result[0]);
    } catch {
      console.log('error');
    }
  };

  const isSelected = (customer) =>
    selectedCustomer?.customer === customer ? 'selected' : '';

  useEffect(() => getPointTotals(), []);

  return (
    <div className="rewards-container">
      <div className="header">
        <h1>Reward Points Program</h1>
        <div className="button-container">
          {custTotals.map(({ customer }, index) => (
            <button
              key={`${customer}-${index}`}
              className={`button ${isSelected(customer)}`}
              onClick={() => setSelectedCustomer(custTotals[index])}
            >
              {customer}
            </button>
          ))}
        </div>
      </div>

      <div className="app-body">
        {selectedCustomer !== undefined && (
          <div>
            <h2>
              <span className="customer-name">{selectedCustomer.customer}</span>{' '}
              Total Points: {selectedCustomer.totalPoints}
            </h2>
            {selectedCustomer.monthlyPoints.map(
              ({ month, totalPoints, transactions }, index) => (
                <Month
                  key={`${month}-${index}`}
                  month={month}
                  monthPoints={totalPoints}
                  transactions={transactions}
                />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rewards;
