import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from 'react-redux'
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/CardSlice';
import { toast } from 'react-toastify';

const Card = ({ name, image, id, price, type, }) => {
    let dispatch = useDispatch()
    return (
        <>
            <div className="cursor-pointer">
                <div className="main bg-white h-[340px] w-[260px] rounded p-1 shadow  hover:border-2  hover:border-green-500">

                    <div className="img ">
                        <img src={image} alt="" className='h-[200px] w-full rounded-xl py-1 object-center' />
                    </div>
                    <div className="name font-semibold py-3"> {name}</div>
                    <div className='flex justify-between items-center gap-3'>
                        <div className="Price font-medium">Rs {price}/=</div>
                        <div className="icon flex items-center gap-2 pe-2">{type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />} <span>{type}</span></div>
                    </div>
                    <button className=' w-full h-[40px] font-medium rounded mt-3 text-gray-800 bg-green-500 cursor-pointer hover:bg-gray-300' onClick={() => {
                        dispatch(AddItem({ id, name, price, type, image, qty: +1 }))
                        toast.success("item Aded")
                    }
                    }> Add to Cart </button>
                </div>
            </div>






        </>
    )
}

export default Card
