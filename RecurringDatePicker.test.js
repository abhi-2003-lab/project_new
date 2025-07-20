import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecurringDatePicker } from './index';

describe('RecurringDatePicker integration', () => {
  it('updates calendar preview when selecting weekly recurrence and days', () => {
    render(<RecurringDatePicker />);

    // Select Weekly
    fireEvent.click(screen.getByText('Weekly'));

    // Select Monday and Thursday (use getAllByText to avoid header collision)
    const monButtons = screen.getAllByText('Mon');
    const monBtn = monButtons.find(btn => btn.tagName === 'BUTTON');
    expect(monBtn).toBeDefined();
    fireEvent.click(monBtn);
    const thuButtons = screen.getAllByText('Thu');
    const thuBtn = thuButtons.find(btn => btn.tagName === 'BUTTON');
    expect(thuBtn).toBeDefined();
    fireEvent.click(thuBtn);

    // Set start date
    const startDateInput = screen.getByLabelText('Start Date');
    fireEvent.change(startDateInput, { target: { value: '2025-07-01' } });

    // Set end date
    const endDateInput = screen.getByLabelText('End Date');
    fireEvent.change(endDateInput, { target: { value: '2025-07-31' } });

    // Debug output for recurring cells
    console.log('All elements with text 7:', screen.queryAllByText('7').map(el => el.className));
    console.log('All elements with text 10:', screen.queryAllByText('10').map(el => el.className));

    // Calendar should highlight Mondays and Thursdays in July 2025
    const recurring7 = screen.queryAllByText('7').find(el => el.className.includes('recurring'));
    const recurring10 = screen.queryAllByText('10').find(el => el.className.includes('recurring'));
    expect(recurring7).toBeDefined(); // July 7, 2025 is a Monday
    expect(recurring10).toBeDefined(); // July 10, 2025 is a Thursday
  });
}); 