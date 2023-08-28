import React from 'react';
import TodoItem from './TodoItem';

const TodoBorad = (props) => { // props는 todoList가 있음
    // console.log("TodoBorad", props.todoList);
    return(
        <div>
            <h1>ToDoList</h1>
            {/* 할일 리스트 조회 */}
            {/* 배열에 있는 내용을 보여주고 싶을때 */}
            {props.todoList.map((item) => 
                <TodoItem 
                    key={item} 
                    item={item}
                />
            )} {/* TodoItem은 item이라는 props를 가져오게 됨 */}
        </div>
    );
}

export default TodoBorad;