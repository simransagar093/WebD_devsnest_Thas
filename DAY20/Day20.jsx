import React, { useState, useEffect } from "react";
import './Day20.css';

// import Card from "./components/card"

const Todo = ({todo,todos,setTodos}) => { return ( <div>
  <h2 className="todo">{todo}</h2>
  <button onClick={()=>{
    console.log("Delete = ", todo);
    const newTodos =todos.filter((el,index) => el!= todo);
    setTodos(newTodos);
  }}>Delete</button>
</div> );
};

function Day20() {
    const [value, setValue]= useState("");
    const [todos, setTodos]= useState([
      "PIZZA you have consumed 300 cals", "BURGER you have consume 100 cals"]);

  
  return (
    <div className="App">
      <h1>Instructions</h1>
      <h2>Calories read only</h2>
      <input type="text" onChange={(e) => { setValue(e.target.value);}} 
      value={value}  />
     
      <button onClick={ () => { 
        setTodos([...todos, value]);
      setValue("")}}>click here</button>
      {todos.map((todo,index) =>(
        <Todo key={index} todo={todo} todos={todos} setTodos={setTodos}/>
      ))}
      
      </div>

  );
}

export default Day20;
