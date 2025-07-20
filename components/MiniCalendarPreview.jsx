import React from 'react';
import './MiniCalendarPreview.css';
import { format } from 'date-fns';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const MiniCalendarPreview = ({ year, month, recurringDates }) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const recurringSet = new Set(recurringDates);

  const days = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="mini-calendar-preview">
      <div className="calendar-header">
        {dayNames.map(d => <div key={d} className="calendar-cell header">{d}</div>)}
      </div>
      <div className="calendar-grid">
        {days.map((day, idx) =>
          day === null ? (
            <div key={idx} className="calendar-cell empty"></div>
          ) : (
            <div
              key={idx}
              className={
                'calendar-cell' +
                (recurringSet.has(format(new Date(year, month, day), 'yyyy-MM-dd')) ? ' recurring' : '')
              }
            >
              {day}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MiniCalendarPreview; 