import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'يناير', value: 0 },
    { label: 'فبراير', value: 0 },
    { label: 'مارس', value: 0 },
    { label: 'أبريل', value: 0 },
    { label: 'مايو', value: 0 },
    { label: 'يونيو', value: 0 },
    { label: 'يوليو', value: 0 },
    { label: 'أغسطس', value: 0 },
    { label: 'سبتمبر', value: 0 },
    { label: 'أكتوبر', value: 0 },
    { label: 'نوفمبر', value: 0 },
    { label: 'ديسمبر', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;