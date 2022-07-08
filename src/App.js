import React, {useState, useRef} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import InputExpense from './Components/InputExpense';
import Header from './Components/Header'
import DisplayExpense from './Components/DisplayExpense';

function App() {
  const [expenseList, setExpenseList] = React.useState([]) 
    
  function deleteExpense (id) {
    const expenseCopy = expenseList.filter(prevList => {
      return prevList.id != id
    })  
    setExpenseList(expenseCopy)
  }

  return ( 
    <>
      <Header />
      <InputExpense  expenseList = {expenseList} setExpenseList ={setExpenseList}/>
      <DisplayExpense expenseList = {expenseList} setExpenseList = {setExpenseList} deleteExpense={deleteExpense}/>
    </>
  )
}

export default App;