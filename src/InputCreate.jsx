import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const InputCreate = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const task = useSelector(state => state.task)

    const handleAddTask = () => {

    }
    return(
        <>
        <h2>Crear una nueva tarea</h2>
        <input 
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
        />

        <button onClick={""}>Añadir tarea</button>
        </>
    )
}


export default InputCreate;