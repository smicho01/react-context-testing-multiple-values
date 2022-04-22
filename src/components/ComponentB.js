import React, {useContext} from "react"

import { ApplicationMainContext } from "../App"

const ComponentB = () => {
    const { count, setCount, count2, setCount2, name} = useContext(ApplicationMainContext)

    return(
        <>
            <div className="component">
                <h3>ComponentB ({name}) -  Add 1</h3>
                <button onClick={() => setCount((cnt) => cnt + 1)}>Click me to set Count {count}</button>
                <button onClick={() => setCount2((cnt) => cnt +1)}>Click me to set Count2 {count2}</button>
            </div>
            
        </>
    )
}

export default ComponentB