import React from "react";
import Profile from "./header/Profile";
import Name from "./header/Name";
import Profession from "./header/Profession";
import ContactWith from "./header/ContactWith";

const CardHeader = () => {
    return(
        <span className='flex flex-row max-sm:flex-col'>
            <Profile />
            <div className="w-full">
            <Name />
            <Profession />
            <ContactWith />
            </div>
        </span>
    )    
}

export default CardHeader;