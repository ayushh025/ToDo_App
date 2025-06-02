import { useState } from "react"
import "./todo.css";
import ToDoForm from "./Form";
import TodoList from "./List";
import TodoDateTime from "./DateTime";

const keyInLocSto = "To Do";
export default function ToDo(){
    const getLocStoData = ()=>{
        const rawToDo = localStorage.getItem(keyInLocSto)
        if(!rawToDo){
            return [];
        }
        return JSON.parse(rawToDo)
    }
    const [task,setTask]=useState(()=>getLocStoData());
    const handleForm=(inputVal)=>{
        const {id ,content,checked} = inputVal;   
        if(!content){
            return;    
        }

        const ifTodocontentMatched = task.find((ele)=>ele.content == content)
        if(ifTodocontentMatched){
            return;
        }
        setTask((prev)=>[...prev,{id,content,checked}]);

        
    }
    const handleDelete=(value)=>{
        let updated = task.filter((ele)=> ele.content !== value)   
        setTask(updated)
    }
    const handleChecked=(nm)=>{
        const updatedTask=task.map((currTask)=>{
            if(currTask.content === nm){
                return {...currTask, checked : !currTask.checked};
            }else{
                return currTask;
            }
        }
        )
        setTask(updatedTask);
    }
    localStorage.setItem(keyInLocSto,JSON.stringify(task))
    return(
    <>
    <section className="todo-container">
        <header>
            <h1>To Do List</h1>
            <TodoDateTime/>
        </header>
        <ToDoForm functionn={handleForm}/>
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((ele)=>(
                        <TodoList key={ele.id} name={ele.content} handleDelete={handleDelete}
                        checked={ele.checked} fun={handleChecked}/>
                    ))
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={()=>setTask([])}>Clear All</button>
        </section>
        
    </section>
    </>
    )
}