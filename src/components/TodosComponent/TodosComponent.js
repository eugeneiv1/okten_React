import {useEffect, useState} from "react";

import {commonService} from "../../services/commonService";
import {ToDoComponent} from "../ToDoComponent/ToDoComponent";


const TodosComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        commonService.getTodos().then(({data}) => setTodos(data))
    }, [])

    return (
        <div>
            {todos.map( item => <ToDoComponent item={item} key={item.id}/>)}
        </div>
    );
};

export {TodosComponent};