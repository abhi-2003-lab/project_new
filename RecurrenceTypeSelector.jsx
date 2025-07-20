import React from 'react';
import './RecurrenceTypeSelector.css';

const options = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
];

const RecurrenceTypeSelector = ({ value, onChange }) => {
  return (
    <div className="recurrence-type-selector">
      {options.map(opt => (
        <button
          key={opt.value}
          className={value === opt.value ? 'selected' : ''}
          onClick={() => onChange(opt.value)}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceTypeSelector; 