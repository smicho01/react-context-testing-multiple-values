import React, { useContext } from "react";

import { ApplicationMainContext } from "../App";

const UserBar = () => {

    const {name} = useContext(ApplicationMainContext)

    return(
        <>
            <div className="user-bar">
                <h3>Welcome {name}</h3>
            </div>
        </>
    )
}

export default UserBar