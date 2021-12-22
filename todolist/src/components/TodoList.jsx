

import React, {useState} from 'react';
import CreateTask from '../modals/createTasks'

const TodoList = () => {
    const [modal, setModal]= useState(false);
    const toggle = () => {
        setModal(!modal);
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
                <CreateTask toggle = {toggle} modal = {modal}/>

            </div>
           


        </div>
    );
};

export default TodoList;