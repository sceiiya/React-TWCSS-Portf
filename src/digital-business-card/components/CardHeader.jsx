import React from "react";
import Profile from "./Profile";
import Name from "./Name";
import Profession from "./Profession";
import ContactWith from "./ContactWith";

const CardHeader = () => {
    return(
        <span className='flex flex-row max-xs:flex-col'>
            <Profile />
            <div>
            <Name />
            <Profession />
            <ContactWith />
            </div>
        </span>
    )    
}

export default CardHeader;