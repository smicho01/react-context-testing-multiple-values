import React, {useContext} from "react"

import { ApplicationMainContext } from "../App"

const ComponentA = () => {
    
    const { count, setCount, count2, setCount2, name } = useContext(ApplicationMainContext)

    const ustawLicznik = () => setCount((cnt) => cnt + 10)
    const ustawLicznik2 = () => setCount2((cnt) => cnt +10)

    return(
        <>
            <div className="component">
                <h3>ComponentA ({name}) - Add 10 </h3>
                <button onClick={ustawLicznik}>Click me to set Count {count}</button>
                <button onClick={ustawLicznik2}>Click me to set Count2 {count2}</button>
            </div>
            
        </>
    )
}

export default ComponentA