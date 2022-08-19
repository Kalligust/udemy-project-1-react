import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import NewExpense from '../NewExpense/NewExpense';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  
  const onSelectYear = (newYear) => {
    setYear(newYear);
  }

  const filteredItems = props.items.filter(item => 
    item.date.getFullYear().toString() === year
  )

  let expenseContent = <p>'No expenses here'</p>

  if(filteredItems.length > 0) {
    expenseContent = filteredItems.map(expenses => 
      <ExpenseItem
        key={expenses.id} 
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date} />)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={onSelectYear}/>
      {expenseContent}
    </Card>
  );
}

export default Expenses;