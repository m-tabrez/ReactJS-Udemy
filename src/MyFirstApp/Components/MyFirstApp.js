import React, { useEffect, useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './ExpenseForm'
import Expenses from './Expenses';

const DUMMY_EXPENSE = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];



const MyFirstApp = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const [filteredExp, setFilteredExp] = useState(expenses);

    const onSubmitAction = (props) => {
        setExpenses( preExpenses => {
            return [ { ...props, date : new Date(props.date)}, ...preExpenses];
        });
    }

    const onFilterOptionSelection = (props) => {
        if(props == 'all'){
            setFilteredExp( () => expenses);
        }else{
            const filtered = expenses.filter( curExp => {
                return curExp.date.getFullYear() == props ;
            })
            setFilteredExp( () => filtered);
        }
        
    }

    useEffect( () => {
        setFilteredExp( () => expenses);
    }, [expenses])


  return (
    <div className='container p-5'>
        <ExpenseForm onSubmitAction={onSubmitAction}/>
        <ExpenseFilter onFilter={onFilterOptionSelection} />
        <Expenses allExpenses={filteredExp}/>
    </div>
  )
}

export default MyFirstApp