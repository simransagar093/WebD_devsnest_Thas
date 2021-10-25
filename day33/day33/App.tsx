import React , {useContext,useState} from "react";
import UsingHooks from "./UsingHooks";
import ThemeContext from "./Theme";
import ThemeToggle from "./ThemeToggle";
import "./Day33.css";
import Todo from "./Todo";

interface TypeScriptHooksProps {
    title:string,
    description: string
}

interface TodoType {
    title: string,
    done:boolean
}
const TypeScriptHooks = ({title,description} :TypeScriptHooksProps) => { //Use this convention
    const [theme, setTheme] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoType[]>([]);

    return(
        <ThemeContext.Provider value= {{theme, setTheme}}>
        <h1>{title}</h1>
        <h6>{description}</h6><hr></hr>
        <p>Using Hooks in TypeScript</p>
        <hr></hr>
        <UsingHooks/>
        <div className= {theme ? "todos dark" : "todos"}>
            <button style={{textAlign: "center", marginLeft: "20vw", marginTop:"10vh"}}
            onClick = {() => {
                setTodos([...todos, {title: "Learn MERN", done:false}]);
            }}>
                Add Todo
            </button>
            {todos.map((todo, index) => {
                return <Todo title= {todo.title} done = {todo.done}/>
            })}
        </div>
        <ThemeToggle/>
        </ThemeContext.Provider>
    )
};

export default TypeScriptHooks;