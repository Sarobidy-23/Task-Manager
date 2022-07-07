import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import '../css/Task.css';
import Card from './Card';

export default function Task(props:any) {
  const [title, setTitle]  =  useState <String>("");
  const [description, setDescription]  =  useState <String>("");
  const [status, setStatus]  =  useState <String>("TODO");
  const {toggle, setToggle, setTodoList, setDoingList,
         setDoneList, todoList, doingList, doneList, actionTask, 
         updateInformation, setActionTask} = props;
  
  const addNewTask = (Title:String, Description:String, Status:String) => {
      if(status==="TODO"){
        setTodoList([<Card Title={Title} Description={Description} Status={Status} />]
                    .concat(todoList)
                   );
      }      
      if(status==="DOING"){
        setDoingList([<Card Title={Title} Description={Description} Status={Status} />]
                     .concat(doingList)
                    );
      }
      if(status==="DONE"){
        setDoneList([<Card Title={Title} Description={Description} Status={Status} />]
                    .concat(doneList)
                   );
      }
      setToggle(false);
      setTitle("");
      setDescription("");
  }

  const update = (motif:String) => {
      setActionTask("add");
      setToggle(false);
      setTitle(updateInformation?.Title);
      if(updateInformation.Status==="TODO"){
        todoList.splice(updateInformation.index, 1);
      }
      if(updateInformation.Status==="DOING"){
        doingList.splice(updateInformation.index, 1);
      }
      if(updateInformation.Status==="DONE"){
        doneList.splice(updateInformation.index, 1);
      }
      if(motif==="update"){
        addNewTask(updateInformation?.Title, updateInformation?.Description, status);
        alert("update with success");
        setTitle("");
        setDescription("");
      }
      if(motif==="remove"){
        alert("Task removed with success")
      }
  }

  return (
    <>
    <div onClick={() => {setToggle(false); setActionTask('add')}} 
         className={toggle?"containerModal":"ModalOff"}>
    </div>
    <div className={`${toggle?"FormModal":"ModalOff"}`}>
        <label className='label' htmlFor="title"> Title </label>
           <input type="text" id='title' className='title'
                  value={actionTask==="add"?title:updateInformation?.Title}
                  onChange={(e:FormEvent<HTMLInputElement>) => { setTitle(e.currentTarget.value)}}
           />
        <label className='label' htmlFor='description'> Description </label>
           <input type="text" id='description' className="description"
                  value={actionTask==="add"?description:updateInformation?.Description}
                  onChange={(event:FormEvent<HTMLInputElement>) => {
                             setDescription(event.currentTarget.value)}
                           }  
           />
        <label className='label' htmlFor="status"> Status </label>
          <div>
           <select id='status'
                  onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                             setStatus(e.target.value)}
                           }
          >
            <option value="TODO">TODO</option>  
            <option value="DOING">DOING</option>  
            <option value="DONE">DONE</option>  
          </select>    
          </div>    
        <button className='close' onClick={() => {setToggle(false); setActionTask("add")}}>close</button>
        {actionTask==="add"? <button className='envoyer' onClick={()=>{addNewTask(title,description, status)}}>
                                  add task
                             </button>
                           : <> <button onClick={() => {update("remove")}}>Remove Task</button>
                                <button className='update' onClick={() => {update("update")}}> Update Status </button>
                             </>
        }
    </div>
        
    </>
  )
}