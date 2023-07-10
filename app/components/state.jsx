"use client"
import "../globals.css";
import { useState } from "react";

export default function State() {
    const [msg, setMsg] = useState('');
    const [bool, setBool] = useState(0);

    function hChange(e) {
        console.log(e.target.value);
        if (msg == 'Reac') {
            setMsg(e.target.value + ' ' + 'yra gerai')
        }
        else {setMsg(e.target.value);}
        
    }

    return (
        <div className="container p-5 border w-fit">
            <h1 className=" text-2xl text-center pb-2 font-bold">useState()</h1>
            <hr />
            <form>
                <p>Tekstas: {msg}</p>
                <input onChangeCapture={ hChange } placeholder="Abc...." type="text"></input>
            </form>
        </div>
    )
}