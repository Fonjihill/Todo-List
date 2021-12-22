

import React, {useState} from 'react';
import CreateTasks from '../modals/createTasks'

const TodoList = () => {
    const [modal, setModal]= useState(false);
    const [taskList, setTaskList]= useState([]);
    const toggle = () => {
        setModal(!modal);
    }

    const saveTasks = (obj) =>{
        let list = taskList
        list.push(obj);
        setTaskList(list)
    }
    return (
        <div>
    
            <div className="header text-center">
                <h2> TODO LIST</h2>  
                <button className="btn" onClick= {() => setModal(true)}> Create a task</button>
            </div>

            <div className="container">
                <div className="row">
                <h4 className='p-4'> All tasks</h4>

                
                </div>
                <CreateTasks toggle = {toggle} modal = {modal} save ={saveTasks}/>

            </div>
           


        </div>
    );
};

export default TodoList;