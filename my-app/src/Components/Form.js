import { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';


export default function Form() {

    const [dataArr, setDataArr] = useState([
        { txt: "Promoner le chien", id: uuidv4() },
        { txt: "Sport", id: uuidv4() },
        { txt: "Coder avec React", id: uuidv4() }
    ])

    const [statInput, setStateInput] = useState()
    
    const deleteElem = id => {
        const filterState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filterState)
    }
    
    const linkdInput = e => {
        setStateInput(e);
    }

    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr]

        const newTodo = {};
        newTodo.txt = statInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr)
        setStateInput('')
    }




    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-10">


            <form onSubmit={e => addTodo(e)} className="mb-3">
                <lebel htmlFor="todo" className="form-lebel mt-4">Choose à faire</lebel>
                <input
                    onInput={e => linkdInput(e.target.value)}
                    value={statInput}
                    type="text"
                    className="form-control"
                    id="todo" />
                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>


            <h2>Listes des choose à faire:</h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item
                            text={item.txt}
                            key={item.id}
                            id={item.id}
                            delTete={deleteElem}
                        />
                    )
                })}
            </ul>
        </div>
    )
}