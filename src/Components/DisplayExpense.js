import React from 'react'

export default function DisplayExpense(props) {

    return (
        <>
            <table className='table table-striped table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <td className='col-3'>Expense Name</td>
                        <td className='col-3'>Location</td>
                        <td className='col-2'>Date</td>
                        <td className='col-2'>Cost</td>
                        <td className='col'></td>
                    </tr>
                </thead>
                <tbody>
                    {props.expenseList.map((expense) => (
                        <tr>
                            <td>{expense.name}</td>
                            <td>{expense.location}</td>
                            <td>{expense.date}</td>
                            <td>{expense.amount}</td>
                            <td><button className = 'btn btn-danger'onClick = {() => props.deleteExpense(expense.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>

                   
            </table>
        </>
    )
}