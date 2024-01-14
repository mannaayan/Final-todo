const { v4 : uuidv4 } = require('uuid')

const todosModel = require('../models/todos.models');

const getAllTodos = async(req,res)=>{
    try{
        const todos = await todosModel.find()//return all users from db 
        res.status(200).json(todos);
    }catch(err){
        res.status(500).send(err.message);
    }
}
const getOneTodo = async (req,res)=>{
    try{
        const todoOne = await todosModel.findOne({id:req.params.id});
        res.status(200).json(todoOne);

    }catch(err){
        res.status(500).send(err.message);  
    }
}

const createTodos = async(req,res)=>{ 
    try{
    const  newTodo = new todosModel({
        id: uuidv4(),
        title: req.body.title,
        desc: req.body.desc,

    });
    console.log(newTodo);
    await newTodo.save();
    res.status(200).json(newTodo);
    } catch(error){
        console.log(error)
        res.status(500).send(error.message);
    }
}
const updateTodo = async(req,res)=>{

    try{
        const todo = await todosModel.findOne({id: req.params.id});
        console.log(todo);
        todo.title = req.body.title;
        todo.desc = req.body.desc;
        console.log(todo.title, todo.desc);
        await todo.save();
        res.status(200).json(todo);
    }catch(error){
        console.log(error)
        res.status(500).send(error.message);
    }

}

const deleteTodo = async(req,res)=>{

    try{
        await todosModel.deleteOne({id: req.params.id});
        res.status(200).json({message: "todo deleted successfully"});

    }catch(err){
        res.status(500).send(err.message);
    }


}

module.exports = {getAllTodos,getOneTodo, createTodos,updateTodo, deleteTodo};