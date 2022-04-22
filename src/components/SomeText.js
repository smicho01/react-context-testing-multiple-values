import React, { useContext } from "react"

import { ApplicationMainContext } from "../App"

const SomeText = () => {

    const {someText} = useContext(ApplicationMainContext)

    return (
        <>
            <p>{someText}</p>
        </>
    )
}

export default SomeText