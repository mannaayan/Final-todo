import React from 'react';
import '../Styles/style.css';

const Todo = (props) => {
  //
  console.log('Todo Component');
  console.log(props);//
  console.log('Todo Component e');

  const { title , desc } = props.todo;
  const { id } = props.todo;

  const handleClick =(id)=>{
    props.onRemoveTodo(id);
  };

  return (
    <article className='todos'>
      <div className='todo'>
          <h2 className='t'>{title}</h2>
          <p className='d'>{desc}</p>
      </div>
      
      <div>
        <button className='d_btn'
        onClick={()=>{
          handleClick(id);
        }}>

          <i className='fa fa-trash fa-2x'> </i>
        
        </button>
      </div>
    </article >
  );
};

export default Todo;