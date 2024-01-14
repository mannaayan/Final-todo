import React from 'react';
import '../Styles/style.css';
import Todo from './Todo';

const  ListTodos = (props) => {
 console.log(props);//
    return (
        <section>
            <h3 className='todo_list'>Todos You Have</h3>

            {props.todos.map(todo => <Todo key={todo.id} todo ={todo}  onRemoveTodo={props.onRemoveTodo}/> )}
             {/* {props.todos.map(todo => {
                console.log(todo);
             })} */}

        </section>
    );
};

export default ListTodos;
