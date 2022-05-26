import React from 'react'

export default function TodoItems({todo,ondelete}) {
  return (
    <div className='bcolor'>
      {/* <h1>{todo.sno}</h1> */}
      <h2>{todo.tittle}</h2>
      <p className='overflow'>{todo.description}</p>
      <button className="btn btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
    </div>
  )
}
