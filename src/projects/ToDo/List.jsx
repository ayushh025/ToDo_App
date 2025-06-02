import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function TodoList({name, handleDelete, checked, fun}){
    return(
        <>
            <li className="todo-item">
                <span className={checked?"checkList":"notCheckList"}>{name}</span>
                <button className="check-btn" onClick={()=>fun(name)}><FaCheck/></button>
                <button className="delete-btn" onClick={()=>handleDelete(name)}><MdDelete/></button>
            </li>        
        </>
    )
}