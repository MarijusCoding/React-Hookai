import { useEffect, useState } from "react";

export default function Effect() {

    const date = new Date()
    let [sec, min, hour] = [date.getSeconds(), date.getMinutes(), date.getHours()]
    useEffect(() => {
        sec = date.getSeconds()
        hour = date.getHours()
        min = date.getMinutes()
    })

    return (
        <div className="container p-5 border w-fit">
            <h1 className=" text-2xl text-center pb-2 font-bold">useEffect()</h1>
            <hr />
            <p>Dabar yra: {hour}:{min}:{sec}</p>
            <p>Atnaujinkite puslapį kad pamatyti realiu laiku</p>
        </div>
    )
    
}