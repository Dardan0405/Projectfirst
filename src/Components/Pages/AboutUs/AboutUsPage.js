import React from "react";
import { Employers } from "./data";
import { useState } from "react";

function AboutPage (){
    const [count,SetCount] = useState(0)
    return(
<div className="Cards">
    {Employers.map((props)=>{
        return(
            <div className="Cards-Container">
                <div className="Names"><p>{props.name}</p></div>
                <div className="Surnames"><p>{props.surname}</p></div>
                <div className="Age"><p>{props.age}</p></div>
                <div className="Icons"><p>{props.icon}</p></div>
            </div>
        )
    })}
</div>
    )
}

export default AboutPage