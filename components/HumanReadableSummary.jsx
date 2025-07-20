import React from 'react';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekNames = ['First', 'Second', 'Third', 'Fourth', 'Last'];

const HumanReadableSummary = ({
  type,
  interval,
  daysOfWeek,
  monthlyPattern,
  startDate,
  endDate,
}) => {
  let summary = '';
  if (type === 'daily') {
    summary = `Every ${interval > 1 ? interval + ' days' : 'day'}`;
  } else if (type === 'weekly') {
    const days = daysOfWeek.map(d => dayNames[d]).join(' and ');
    summary = `Every ${interval > 1 ? interval + ' weeks' : 'week'} on ${days}`;
  } else if (type === 'monthly') {
    summary = `The ${weekNames[monthlyPattern.week - 1]} ${dayNames[monthlyPattern.day]} of every ${interval > 1 ? interval + ' months' : 'month'}`;
  } else if (type === 'yearly') {
    summary = `Every ${interval > 1 ? interval + ' years' : 'year'}`;
  }
  summary += ` starting from ${startDate}`;
  if (endDate) summary += ` until ${endDate}`;
  return <div className="human-readable-summary">{summary}</div>;
};

export default HumanReadableSummary; 