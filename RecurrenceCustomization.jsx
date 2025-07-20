import React from 'react';
import './RecurrenceCustomization.css';

const weekOptions = [1, 2, 3, 4, 5];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const RecurrenceCustomization = ({
  type,
  interval,
  onIntervalChange,
  daysOfWeek,
  onDaysOfWeekChange,
  monthlyPattern,
  onMonthlyPatternChange,
}) => {
  return (
    <div className="recurrence-customization">
      <div className="interval-row">
        <label>Repeat every</label>
        <input
          type="number"
          min={1}
          value={interval}
          onChange={e => onIntervalChange(Number(e.target.value))}
        />
        <span>{type === 'daily' ? 'day(s)' : type === 'weekly' ? 'week(s)' : type === 'monthly' ? 'month(s)' : 'year(s)'}</span>
      </div>
      {type === 'weekly' && (
        <div className="days-of-week-row">
          {dayNames.map((name, idx) => (
            <button
              key={name}
              className={daysOfWeek.includes(idx) ? 'selected' : ''}
              onClick={() => {
                if (daysOfWeek.includes(idx)) {
                  onDaysOfWeekChange(daysOfWeek.filter(d => d !== idx));
                } else {
                  onDaysOfWeekChange([...daysOfWeek, idx]);
                }
              }}
              type="button"
            >
              {name}
            </button>
          ))}
        </div>
      )}
      {type === 'monthly' && (
        <div className="monthly-pattern-row">
          <label>The</label>
          <select
            value={monthlyPattern.week}
            onChange={e => onMonthlyPatternChange({ ...monthlyPattern, week: Number(e.target.value) })}
          >
            {weekOptions.map(w => (
              <option key={w} value={w}>{w === 1 ? 'First' : w === 2 ? 'Second' : w === 3 ? 'Third' : w === 4 ? 'Fourth' : 'Last'}</option>
            ))}
          </select>
          <select
            value={monthlyPattern.day}
            onChange={e => onMonthlyPatternChange({ ...monthlyPattern, day: Number(e.target.value) })}
          >
            {dayNames.map((name, idx) => (
              <option key={name} value={idx}>{name}</option>
            ))}
          </select>
          <span>of every month</span>
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization; 