import React, { useRef, useState } from 'react'
import ErrorModal from './ErrorModal';
import styles from './ExpenseForm.module.css'
import ReactDom from 'react-dom'

const ExpenseForm = (props) => {

    const title = useRef();

    const [formValues, setFormValues] = useState({
        title : '',
        amount : '',
        date : ''

    });

    const [isInvalid, setIsInvalid] = useState(null);
    const [errorMsg, setErrorMsg] = useState();
    const [isHidden, setIsHidden] = useState(true)

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
        console.log(title.current.value);
        for(let key in formValues){
           if(formValues[key].trim().length == 0){
            setErrorMsg( key + " field value is empty");
            setIsHidden(false);
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

    const modalCloseClick = () => {
        setErrorMsg();
        setIsHidden(true);
    }


  return (
    <>
        {ReactDom.createPortal( <ErrorModal style={isHidden} msg={errorMsg} close={modalCloseClick} />, document.getElementById("errorModal"))}
        <form onSubmit={onSubmitHandler}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Title</label>
                    <input type="text" className={ `form-control ${isInvalid && styles.invalid}` } placeholder="Enter Item" name="title" ref={title} value={formValues.title} onChange={onChangeHandler} />
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