import React from 'react'
import TodoItems from './Todositems'


export default function Todos(props) {
  return (
    <div className='container max-width'>
      <div><h3 className='text-center'>TOdo's</h3>
      <div className="all">
      {props.todos.length===0? "No Todos to display":
          props.todos.map((todo)=>{
            return <TodoItems todo={todo} key={todo.sno} ondelete={props.ondelete}/>
          })}
          </div>
      </div>
    </div>
  )
}
