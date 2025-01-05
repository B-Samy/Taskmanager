import React, { useEffect, useState } from "react"




export const Task = ({task, onRemove}) =>{
return (

    <>

        <div className="taskbeta" id="taskbetta">
        <h3>{task.title}</h3>
        <p className="taskbetap">{task.priority}</p>
        <p className="summarybeta">{task.summary}</p>
        <p className="tasktime">{task.time}</p>
        <button onClick={()=> onRemove(task.id)}>Remove</button>
        </div>
    </>

)
}


// icons
import { BiCircleThreeQuarter , BiCalendar , BiStreetView , BiLogOut , BiDockLeft , BiPlus , BiX  } from "react-icons/bi";

import toast, { Toaster } from 'react-hot-toast';

export const TaskMain = () =>{

    const [taskadd, setTaskadd] = useState(false)
    const [tasks , setTasks] = useState([]);
    const [title, setTitle]= useState('')
    const [summary, setSummary]= useState('')
    const [priority, setPriority]= useState("Medium")
    const [time, setTime]= useState('')


    useEffect(()=>{
        const savedProject = JSON.parse(localStorage.getItem('tasks')) || [];

    const CurrentTime = Date.now()
    const ValidTask = savedProject.filter(task =>{
        const TimeElapsed = CurrentTime - task.createdAt;
        return TimeElapsed < 14400000
    });

    setTasks(ValidTask);
},[])


    useEffect(()=>{
        if(tasks.length > 0){
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    },[tasks]);
    

    const addNewBtnTask = () =>{
        toast('New Task Created' , {
      style: {
        backgroundColor: '#4CAF50',  // Custom background color
        color: '#fff',                // Custom text color
        borderRadius: '10px',
        zIndex:'99999999999',         // Optional: rounded corners
        padding: '16px',              // Optional: padding inside toast
      },
    })
        const newTask = {
            id:Date.now(),
            title,
            priority,
            summary,
            time,
            createdAt:Date.now(),
        };

        const updatedTask = [...tasks , newTask];
        setTasks(updatedTask);
        setPriority('')
        setSummary('')
        setTime('')


    };


    const RemoveTask = (taskId) =>{
        const updatedTask = tasks.filter((task)=> task.id !== taskId);
        setTasks(updatedTask)
    }

   
  

    return (
        <>
        <div className="Homepage">
            <div className="recenthome">
            <p>Recents</p>
            </div>
            <hr />

            <div className="boxmethod">
                <div className="todolist">

            <div className="maketodo" onClick={() => setTaskadd(true)}>
            <div className="schedule">

            <BiPlus className="Threequarter"></BiPlus>
            <p>Create Task</p>
            
            </div>

            <p className="addtask" id="maketodop">Schedule regular check-ins to monitor progress</p>


            </div>


            <div className="checkrecords">
                <div className="records">
                      <BiCalendar className="checkrecordlogo"></BiCalendar>
            <p>Check Records</p>
                </div>

              <p className="addrecords" id="addrecords">Monitor progress closely to stay on track</p>


            </div>

            <div className="endtask">
                <div className="taskend">
                <BiStreetView className="streetview"/>
                <p>End Task</p>

                </div>
                <p className="endtaks" id="endtaks">End task successfully</p>
            </div>

<a href="https://gemclone.onrender.com/gemini/newchat" target="_blank" className="chatway">

            <div className="aitalk">
                <div className="chatbot">
                <BiLogOut className="logoutt"></BiLogOut>
                <p>Talk with AI</p>
                </div>

                <p className="chatresponse" id="chatresponse">Improve conversation quality</p>
            </div>

</a>
            {/* over */}

                </div>
 {taskadd && (
        <div className="popup">
          <div className="popuptask">
            <BiX className="removebix" onClick={()=> setTaskadd((prev) => !prev)} />
            <div className="mainmenu">
              <h2>Create Project</h2>
              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="priorities">
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="summary">
              <textarea
                placeholder="Summary of the title"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>

            <div className="timing">
              <input
                type="text"
                placeholder="Time (e.g 4 to 6)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <button className="Ctd-task" onClick={addNewBtnTask}>
              Create Task
            </button>
            <Toaster />
          </div>
        </div>
      )}
 
<div className="recently-view">
    <p>Recently viewed</p>
</div>
<div className="task-list" id="tasklistid">

{tasks.map((task)=>(
    <Task key={task.id} task={task} onRemove={RemoveTask}/>
    ))}
</div>
            </div>

                {/* boxmethod */}

                {/* added task here  */}
        </div>
        
        </>
    )
}
