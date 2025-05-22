import React, { createContext, useState } from 'react'
import { Food } from '../Food';


export const DataContext = createContext();

function Usercontext({ children }) {

    let [input , setInput]=useState('')
    let [cate , setCate ]= useState(Food)
    let [showCard , setShowcard]=useState()


    const data = {
        input, setInput,cate, setCate, showCard , setShowcard
    }

    return (
        <>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>


        </>
    )
}

export default Usercontext





