import React,{useState} from 'react';
import Container from './componants/Container';
import Task from './componants/Task';
import './App.css';

function App() {
    // =  useState <{title:String, description:string, status:string} | any>();
  const [todoList, setTodoList]    =  useState <any[]> ([]);
  const [doingList, setDoingList]  =  useState <JSX.Element[]> ([]);
  const [doneList, setDoneList]    =  useState <JSX.Element[]> ([]);
  const [toggle, setToggle]  =  useState<boolean>(false);
  const [actionTask, setActionTask] = useState<String>("add");
  const [updateInformation, setUpdateInformation]  =  useState<Object>();



  return (
    <div>
      <Task toggle={toggle} 
            setToggle={setToggle}
            setTodoList={setTodoList}
            setDoingList={setDoingList}
            setDoneList={setDoneList}
            todoList={todoList}
            doingList={doingList}
            doneList={doneList}
            actionTask={actionTask}
            setActionTask={setActionTask}
            updateInformation={updateInformation}
      />
      <button onClick={() => {setToggle(!toggle)}}>New task</button>
      <div className='task'>
          <Container etiquette="TODO">
               {(todoList).map((todoItem:JSX.Element, index) => (
                 <div className="Item" key={todoItem.props.Title}
                      onClick={() => {setUpdateInformation({Title:todoItem.props.Title, 
                                                            Description:todoItem.props.Description,
                                                            Status:todoItem.props.Status, Index:index});
                                      setToggle(true);
                                      setActionTask("update");
                }}>
                    {todoItem}
                 </div>
               ))}
          </Container>
          <Container etiquette="DOING">
               {(doingList).map((doingItem:JSX.Element, index) => (
                  <div className="Item"  key={doingItem.props.Title}
                  onClick={() => {setUpdateInformation({Title:doingItem.props.Title, 
                                                        Description:doingItem.props.Description,
                                                        Status:doingItem.props.Status, Index:index});
                                  setToggle(true);
                                  setActionTask("update");
                  }}>
                    {doingItem}
                  </div>
               ))}
          </Container>
          <Container etiquette="DONE">
               {(doneList).map((doneItem:JSX.Element, index) => (
                <div className="Item"  key={doneItem.props.Title}
                onClick={() => {setUpdateInformation({Title:doneItem.props.Title, 
                                                      Description:doneItem.props.Description,
                                                      Status:doneItem.props.Status, Index:index});
                                setToggle(true);
                                setActionTask("update");
                 }}>
                    {doneItem}
                 </div>
               ))}
          </Container>
     </div>
    </div>
  );
}

export default App;
