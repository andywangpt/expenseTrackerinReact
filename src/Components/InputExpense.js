import React from 'react'
import { useState } from "react"

export default function InputExpense(props) {

  const [expense, setExpense] = React.useState({
    name: "",
    location: "",
    amount: "",
    date: "",
    id: ""
  })

  const handleChange = (e) => {
    setExpense(prevExpense => {
      return {
        ...prevExpense, 
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    setExpense(prevExpense => {
      return {
        ...prevExpense,
        id: Date.now()
    }})
    props.setExpenseList((prevExpenseList) => [...prevExpenseList, expense])
  }
    
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          className = 'col-3'
          name='name'
          onChange= {handleChange}
          type='text'
          placeholder='Enter name of expense'
          ></input>

        <input
          className='col-3'
          name='location'
          type='text'
          onChange= {handleChange}
          placeholder='Enter place of purchase'
          ></input>
            
        <input
          className='col-2'
          name='date'
          type='date'
          onChange={handleChange}>
        </input>
            
        <input
          className='col-2'
          name='amount'
          type='number'
          onChange={handleChange}
          placeholder='amount'
          ></input>
        <button type='button' className = 'btn btn-primary' onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

