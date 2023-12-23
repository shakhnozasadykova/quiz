import React from "react";
import { AppButton } from "./UI/AppButton";
import { Link } from "react-router-dom";


export const LinkButton=({path,...props})=>{

    return(
        <Link to={path}>
            <AppButton {...props}/>
        </Link>

    )
}