import React, { useState } from 'react'
import styles from './ExpenseForm.module.css'

const ExpenseForm = (props) => {

    const [formValues, setFormValues] = useState({
        title : '',
        amount : '',
        date : ''

    });

    const [isInvalid, setIsInvalid] = useState(null);

    const onChangeHandler = (event) => {

        const name = event.target.name;

        setFormValues( preValues => {
            return {
                ...preValues,
                [name] : event.target.value
            }
        })

        
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        for(let key in formValues){
           if(formValues[key].length == 0){
            return 
           }
        }

        props.onSubmitAction({
            ...formValues,
            id : Math.random()
        });

        setFormValues( () => {
            return {
                title : '',
                amount : '',
                date : ''
            }
        })

    }


  return (
    <>
        <form onSubmit={onSubmitHandler}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Title</label>
                    <input type="text" className={ `form-control ${isInvalid && styles.invalid}` } placeholder="Enter Item" name="title" value={formValues.title} onChange={onChangeHandler} />
                </div>
                <div className="form-group col-md-6">
                    <label>Amohnt</label>
                    <input type="number" min="0.01" step="0.01" className="form-control" placeholder="Enter Price" name="amount" value={formValues.amount} onChange={onChangeHandler}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" className='form-control' name="date" value={formValues.date} onChange={onChangeHandler}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor=""> &nbsp;</label>
                    <button type='submit' className='btn btn-primary d-block'>Submit</button>
                </div>
            </div>
            
        </form>
    </>
  )
}

export default ExpenseForm