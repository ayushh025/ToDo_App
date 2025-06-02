import { useState } from "react";

export default function ToDoForm({functionn}){

    const [inputVal,setInputVal]=useState({
            id:"",
            content:"",
            checked:false
    });

    const handleInput = (value) =>{
        setInputVal({id:value,
            content:value,
            checked:false
        });
    }

    const handleForm=(evt)=>{
        evt.preventDefault();

        functionn(inputVal);
        setInputVal({id:"",
            content:"",
            checked:false
        });

    }    
    return(
    <>
            <section className="form">
                <form onSubmit={handleForm}>
                        <input type="text" value={inputVal.content} 
                        onChange={(evt)=>handleInput(evt.target.value)} className="todo-input" autoComplete="off"/>
                        <button type="submit" className="todo-btn">Add Task</button>
                    
                </form>
            </section>
    </>
    )
}