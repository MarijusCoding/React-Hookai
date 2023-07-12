"use client"

import State from "./components/state"
import Effect from "./components/effect"

export default function Page() {

    return (
        <>
          <h1 className=" text-center text-5xl pb-2">React'o hookai</h1>
         <div className="container flex">
             <State />
             <Effect />
         </div>
        </>
    )
}