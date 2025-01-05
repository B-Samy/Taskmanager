import React , {useEffect} from "react"
import './Css/ManageFlex.css'
import { ManagerFlex } from "./TaskManager/ManagerFlex"
import './MediaQ/280.css'
import './MediaQ/324.css'
import './MediaQ/350.css'
import './MediaQ/389.css'
import './MediaQ/430.css'
import './MediaQ/470.css'
function App() {

  useEffect(() => {
    // Prevent zooming on touch events
    const preventZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Add event listener for touch events
    document.addEventListener("touchstart", preventZoom, { passive: false });

    // Cleanup event listener
    return () => {
      document.removeEventListener("touchstart", preventZoom);  
    };
  }, []);

  return (
    <>


    <ManagerFlex/>


    </>
  )
}

export default App
