import React, {useState} from "react";

export default function Item(props){
    console.log(props.data)

    return (
        <div>
            <h2>
                {props.data}
            </h2>
        </div>
    )
}