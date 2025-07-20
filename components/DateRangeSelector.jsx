import React from 'react';
import './DateRangeSelector.css';

const DateRangeSelector = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
  return (
    <div className="date-range-selector">
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="date" value={startDate} onChange={e => onStartDateChange(e.target.value)} />
      </div>
      <div>
        <label htmlFor="end-date">End Date</label>
        <input id="end-date" type="date" value={endDate} onChange={e => onEndDateChange(e.target.value)} />
      </div>
    </div>
  );
};

export default DateRangeSelector; 