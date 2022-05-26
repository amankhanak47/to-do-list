import React, { useState } from 'react'

const Addtodocomp = ({addtodos}) => {
    const [tittle,settittle]=useState("");
    const [description,setdescription]=useState("");
    let addtodo=(e)=>{
        e.preventDefault();
        
       
        addtodos(tittle,description);
    }
  return (
    <div className='container addto'>
        <h1 className='text-center'>TOdo's LIST</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label big-bold">Tittle</label>
    <input type="text" className="form-control" value={tittle} onChange={(e)=>{settittle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label big-bold">Description</label>
    <input type="textarea" value={description} onChange={(e)=>{setdescription(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={addtodo}>ADD</button>
</form>
    </div>
  )
}

export default Addtodocomp
