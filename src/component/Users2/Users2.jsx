import React from "react";
import { use } from "react";

const users2 = ({userPromise}) =>{

    const users = use(userPromise);

    console.log('users 2 suspense data load',users);
    return(
        <div>

        </div>
    );
}

export default users2;