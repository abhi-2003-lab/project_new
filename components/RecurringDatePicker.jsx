import React from 'react';
import './RecurringDatePicker.css';
import { useRecurrenceStore } from '../store/recurrenceStore';
import {
  RecurrenceTypeSelector,
  RecurrenceCustomization,
  DateRangeSelector,
  MiniCalendarPreview,
  HumanReadableSummary,
} from './index';
import { getRecurringDates } from '../utils/recurrenceUtils';

const RecurringDatePicker = () => {
  const {
    type,
    interval,
    daysOfWeek,
    monthlyPattern,
    startDate,
    endDate,
    setType,
    setInterval,
    setDaysOfWeek,
    setMonthlyPattern,
    setStartDate,
    setEndDate,
  } = useRecurrenceStore();

  const recurringDates = getRecurringDates({
    type,
    interval,
    daysOfWeek,
    monthlyPattern,
    startDate,
    endDate,
    maxCount: 100,
  });

  const today = new Date(startDate);

  return (
    <div className="recurring-date-picker">
      <RecurrenceTypeSelector value={type} onChange={setType} />
      <RecurrenceCustomization
        type={type}
        interval={interval}
        onIntervalChange={setInterval}
        daysOfWeek={daysOfWeek}
        onDaysOfWeekChange={setDaysOfWeek}
        monthlyPattern={monthlyPattern}
        onMonthlyPatternChange={setMonthlyPattern}
      />
      <DateRangeSelector
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <MiniCalendarPreview
        year={today.getFullYear()}
        month={today.getMonth()}
        recurringDates={recurringDates.filter(d => d.startsWith(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`))}
      />
      <HumanReadableSummary
        type={type}
        interval={interval}
        daysOfWeek={daysOfWeek}
        monthlyPattern={monthlyPattern}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default RecurringDatePicker; 