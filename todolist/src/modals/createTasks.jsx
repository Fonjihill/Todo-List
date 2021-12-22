import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const createTasks = ({modal, toggle}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle ={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group p-2">
                            <label>Task Name</label>
                            <input type= "text" className="form-control"></input>
                        </div>
                        <div className="form-group p-2">
                            <label>Description</label>
                            <textarea rows="5" className="form-control">

                            </textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Done</Button>
                    <Button color='secondary' onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};


export default createTasks;