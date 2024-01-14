import React, { useState } from 'react';
import '../Styles/style.css';



const AddTodos = (props) => {

    const [todo, setTodo ] = useState({title : " ",desc : " "});
    const{title, desc} = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
          return { ...oldTodo, [name]: event.target.value };
        });
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(todo);

        //add todo
        props.onAddTodos(todo);



        console.log(e.target.value);
        setTodo({ title: "", desc: "" });   
    }

  return (
    <>
    <div className='addtodos_wrapper'>
       <form onSubmit={handleSubmit} className='form' >
            <div className='todo_title'>
                {/* <label htmlFor='title' >
                    Todo Title: 
                </label> */}

                <input className='add_text'
                    type = 'text'
                    id='title'
                    name='title'
                    value={title}
                    placeholder='Todo Title'
                    onChange={handleChange}
                />
            </div>

            <div className='todo_desc'>
                {/* <label htmlFor='Desc' >
                    Write here Your Todo
                </label> */}


                  <textarea className='add_desc'
                    placeholder='Todo Description'
                    type="text"
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={handleChange}
                    />  
                    
            </div>
            <div >
                <button type='submit' className='add_btn'>Add Todo</button>
            </div>
        </form>
    </div>
    </>
  );
};


export default AddTodos;