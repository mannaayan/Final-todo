import React, {useEffect, useState}from 'react';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';

import '../Styles/style.css';
import NavBar from '../Components/Headnav';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';
import axios from 'axios';


const Home = () => {


    const[todos, setTodos] = useState();

/*
    // const AddTodo = async() =>{
    //   await axios.post('http://localhost:5042/addTodo',
    //     {
    //       title:todos.title, 
          
    //       desc: todos.desc
    //   })
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err))
     
    // }
   */ 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5042/u');
          setTodos(response.data);
          //console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }  
      };
  
      fetchData();
    }, [])
    


    //child To paresnt
    const handelAddTodo = async(todo) =>{
       //console.log(todo);
        
        /* done*/
        try{
        const response = await axios.post('http://localhost:5042/addTodo', todo);
        console.log('Response:', response.data);
        // Handle the response as needed
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }

      /**/

        setTodos((prevTodos)=>{
            return [...prevTodos, {id: uuidv4() , todo}]
        });

       
    };

    const handleRemoveTodo =async(id) => {
      /**/
      
      try{
        const response = await axios.delete(`http://localhost:5042/deleteTodo/${id}`);
        console.log(id);
        console.log('Response:', response.data);
        // Handle the response as needed
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }
      
      /**/
        setTodos((prevTodos) => {
          const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
          return filteredTodos;
        });
      };


  return (
    <div>
        <NavBar/>
        <AddTodos onAddTodos = {handelAddTodo} /> 
       
      {todos &&  <ListTodos todos={todos}  onRemoveTodo={handleRemoveTodo} /> }
      
    </div>
  )
}

export default memo(Home);
