import { Marquee } from "./Marquee"
import { Sidebar } from "./Sidebar"
import { TaskMain } from "./TaskMain"

export const ManagerFlex = () => {
    return (
        <>
        
        <div className="betweenFlex">
            <Sidebar/>
            <TaskMain/>
            
        </div>
        <Marquee/>

        </>
    )
}
