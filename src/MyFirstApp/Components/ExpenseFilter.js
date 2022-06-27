import React from 'react'

const ExpenseFilter = (props) => {

    const onChangeHandler = (event) => {
        props.onFilter(event.target.value);
    }
    

  return (
    <>
         <div className="card mb-3">
            <div className="card-body d-flex justify-content-between">
                <div className="leftContent d-flex align-items-center">
                    <p className='mb-0'>Select your option to Filter</p>
                </div>
                <div className="rightContent d-flex align-items-center">
                   <select className='form-control' onChange={onChangeHandler}>
                        <option value="all">all</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                   </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpenseFilter