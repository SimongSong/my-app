import { useDispatch } from "react-redux"
import { setCoordinates, setFishing, setShowTouch } from "../../componentSlice"

function TouchScreen(){
    const dispatch = useDispatch()
    function getClickLocation(e) {
        console.log(e)
        dispatch(setCoordinates({x: e.clientX, y:e.clientY
        }))
        dispatch(setFishing(true))
        dispatch(setShowTouch(false))
    }
     return <div id="TouchScreen" onClick={getClickLocation}>
         <span>CLICK/TOUCH TO CAST!</span>
     </div>
}


export default TouchScreen