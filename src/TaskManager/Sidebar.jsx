import React, { useState } from "react"


import {Calendar} from 'primereact/calendar'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


// icons 
import { LuBell , LuSearch , LuClock , LuFile , LuComponent , LuTrash2 , LuThumbsUp , LuLoader , LuTrash} from "react-icons/lu";



export const Sidebar = () =>{
    const [datetime12h, setDateTime12h] = useState(null);
    const [trash , setTrash] = useState(false)

    return (
        <>
        <div className="Sidebay">
            <div className="baycheck">
                <div className="btnimage">
                    <img src="https://t3.ftcdn.net/jpg/04/02/20/60/360_F_402206095_fe2r5w5okKchFveuhd4OqBtjYE6MpadK.jpg" alt="" />
                    <p>PriorityFlow</p>
                </div>
                {/* baycheck checkpoint */}

                <LuBell className="bellhell"/>
            </div>


            <div className="inputsidebar">
            <LuSearch className="LuSearch" />
                <input type="text" placeholder="Search for anything" />
            </div>
            <div className="recents">
                <div className="recentslogo">
                    <LuClock className="LuClock" />
                    <p>Recents</p>
                </div>
            </div>
            <hr />

            <div className="drafts">
                <div className="teams">
                    <img src="https://www.shutterstock.com/image-illustration/letter-s-yellow-circle-260nw-2238004471.jpg" alt="" />
                    <h5>Shaheer Rangrej</h5>
                </div>


<div className="draft">

                    <LuFile className="LuFile" />
                    <p>Drafts</p>

</div>

<div className="project">

                    <LuComponent className="LuProject"/>
                    <p>All Projects</p>
</div>

<div className="trash">


                  


                    <LuTrash2/>
                    <p>Trash</p>
</div>
            </div>
            <hr />
            <br />
            <br />
            {/* calendar */}

            <div className="calendar">
                {/* here calendar  */}

           <div className="flex-auto">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                </label>
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" placeholder="Expand Date"  />
            </div>

            </div>

        <br />
        <br />
        <hr />
        <div className="Archived">
            <div className="projects">
                <p>Archieved</p>
            </div>

<div className="complete">


            <LuThumbsUp />
            <p>Completed</p>

</div>

<div className="pending">

            <LuLoader />
            <p>Pending</p>

</div>
        </div>


















            {/* sidebarcheckpoint */}
        </div>
        <hr />

        </>
    )
}
