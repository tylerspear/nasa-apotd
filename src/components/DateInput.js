import React from 'react'

const DateInput = (props) => {
    
    return (
        <form className="form-date" onSubmit={props.changeDate}>
            <input className="form-datepicker" placeholder="yyyy-mm-dd"/>
            <input className="form-submit" type="submit" />
        </form>
    )
}

export default DateInput