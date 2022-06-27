import React from 'react'

const ExpenseItem = ({id, title, amount, date}) => {
  return (
    <>
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between">
                <div className="leftContent">
                    <h4>{title}</h4>
                    <p className='mb-0'>{date.toDateString()}</p>
                </div>
                <div className="rightContent d-flex align-items-center">
                    <p className='mb-0'>$ {amount}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpenseItem