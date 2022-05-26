// import logo from './logo.svg';
import "./App.css";
import Header from "./my-components/Header";
import Todos from "./my-components/Todos";
import { useState, useEffect } from "react";
import Addtodocomp from "./my-components/Addtodocomp";

function App() {
  let inittodo;
  let sno;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    // console.log("this is ondelete", todo);
    settodos(todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addtodos = (tittle, description) => {
    // console.log(tittle, description);
    
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const alltodo = {
      sno: sno,
      tittle: tittle,
      description: description,
    };
    console.log(alltodo);

    settodos([...todos, alltodo]);
  };

  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header tittle="TODO's LIST" about={true} />
      <Addtodocomp addtodos={addtodos} />
      {/* <hr className='container'/> */}
      <Todos todos={todos} ondelete={ondelete} />
    </div>
  );
}

export default App;
