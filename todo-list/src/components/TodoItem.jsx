import React, {useState} from 'react';

const TodoItem = (props) => {
    const [todo, setTodo] = useState([]);
    // 아이템 삭제
    const itemDelete = () => {
        setTodo(todo.filter((item) => props.item !== todo.item));
    };

    return(
        <div className='todo-item'>
            <div>{props.item}</div>
            <button type='button' onClick={itemDelete.item}>삭제</button>
        </div>
    );
}

export default TodoItem;