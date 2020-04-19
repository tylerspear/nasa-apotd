import React from 'react'

const DateInput = (props) => {
    
    return (
        <form onSubmit={props.changeDate}>
            Enter a date (YY-MM-DD):
            <input />
            <input type="submit" />
        </form>
    )
}

export default DateInput