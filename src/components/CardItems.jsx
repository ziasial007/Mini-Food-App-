import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
// import image from '../assets/images/3.png'
import { useDispatch } from 'react-redux';
import { Decrement, Increment, RemoveItem } from '../redux/CardSlice';
import { toast } from 'react-toastify';
const CardItems = ({ name, id, price, image, qty }) => {
    let dispatch = useDispatch()
    
    
    return (
        <>
            <div className="main flex justify-between shadow-2xl p-3 bg-white my-4 mx-2 rounded ">
                <div className="first-div w-[70%] ">
                    <div className="img flex gap-10 items-center  px-3 ">
                        <img src={image} alt="food" className="w-[20%]" />
                        <div className='mx-eauto shadow-xl'>
                            <div className="name ">{name}
                                <div className="flex bg-gray-500  bor">
                                    <button className="bg-green-500 px-4 text-white cursor-pointer" onClick={() => {dispatch(Increment(id)) }}>+</button>
                                    <span className="px-4 flex items-center">{qty}</span>
                                    <button className="bg-red-500 px-4 text-white cursor-pointer" onClick={()=>{dispatch(Decrement(id))}}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-div w-[30%] ">
                    <div className='flex gap-2 flex-col font-semibold items-end justify-center h-full'>
                        <span>Rs{price}/-</span>
                        <div className="icon text-2xl font-semibold text-red-500 cursor-pointer"><RiDeleteBinLine onClick={() => {dispatch(RemoveItem(id));toast.error("Item Remove");

                        }} /></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CardItems
