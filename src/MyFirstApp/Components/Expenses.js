import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const expenses = props.allExpenses;

    if(expenses.length == 0){
        return (
            <>
                 <div className="card mb-3">
                    <div className="card-body d-flex justify-content-center">
                        <p className='mb-0'>No Items for your selection</p>
                    </div>
                </div>
            </>
        )
    }


  return (
    <>
      { expenses.map(curExp => <ExpenseItem key={curExp.id} title={curExp.title} amount={curExp.amount} date={curExp.date} />)}
    </>
  )
}

export default Expenses