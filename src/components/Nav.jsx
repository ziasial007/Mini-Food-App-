import React, { useContext, useEffect } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { DataContext } from '../context/Usercontext';
import { Food } from '../Food';
import { useSelector } from 'react-redux';

const Nav = () => {

    let { input, setInput, cate, setCate,showCard , setShowcard } = useContext(DataContext)

    useEffect(() => {
        let newdata = Food.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
        setCate(newdata)
    }, [input])

    let items = useSelector(state => state.cart)
 
    
   
    
    return (
        <>

            <div className='w-full h-[100px] bg-slate-200 flex justify-between items-center px-6 sticky top-0 ' >

                <div className='w-[60px] h-[60px]  bg-white flex justify-center items-center rounded shadow-xl'>
                    <IoFastFoodSharp className='h-[30px] w-[30px]' />
                </div>
                <form action="" className='bg-white w-[60%] h-[50px] rounded flex items-center shadow'>
                    <MdOutlineScreenSearchDesktop className='w-[30px] h-[30px] mx-2' onSubmit={(e) => e.preventDefault()} />
                    <input type="text" placeholder='Search' className='w-full h-full outline-none' onChange={(e) => setInput(e.target.value)} value={input} />
                </form>

                <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded shadow-xl relative cursor-pointer' onClick={()=>setShowcard(true)}>
                    < FaCartPlus className='h-[30px] w-[30px] ' />
                    <span className=' top-0 right-1 absolute font-semibold'>{items.length}</span>
                </div>

            </div>

        </>
    )
}

export default Nav
