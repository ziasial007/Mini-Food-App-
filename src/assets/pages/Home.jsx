import React, { useContext, useState } from "react";
import Nav from "../../components/Nav";
import Category from "../../Category";
import Card from "../../components/Card";
import { Food } from "../../Food";
import { DataContext } from "../../context/Usercontext";
import { RxCross1 } from "react-icons/rx";
import CardItems from "../../components/CardItems";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Home = () => {

    let { cate, setCate, input, showCard, setShowcard } = useContext(DataContext)
    function filter(ccate) {
        if (ccate === 'All') {
            setCate(Food)
        } else {
            let newdata = Food.filter((item) => (item.category.toLowerCase() === ccate.toLowerCase()))
            setCate(newdata)
        }
    }
    let cartItems = useSelector(state => state.cart)

    let subtotal = cartItems.reduce((total, item) => total + item.qty * item.price, 0)
    // console.log(subtotal);
    let develiryFee = 200;
    let taxes = subtotal * 3.5 / 100;
    let total = Math.floor(subtotal + develiryFee + taxes)


    return (
        <>
            <div className="bg-slate-200 w-full min-h-screen py-2 ">

                <Nav />
                {!input ? <div className="flex flex-wrap justify-center items-center gap-4">
                    {/* //////////////Category */}
                    {Category.map((item) => (
                        <div key={item.id} className="h-[100px] w-[100px] bg-white flex flex-col justify-center items-start rounded  font-semibold cursor-pointer hover:shadow hover:rotate-2 transition-all hover:bg-gray-200" onClick={() => filter(item.name)}>
                            <div className="flex justify-items-start text-gray-700 p-2">{item.name}</div>
                            <div className="text-[40px] px-5 text-orange-500   ">{item.icon}</div>
                        </div>
                    ))}
                </div> : null}

                {/* ///////////////////////////////// */}
                {cate.length >0 ? <div className="flex flex-wrap gap-4 m-2 justify-center ">
                    {cate.map((item) => (
                        <Card name={item.name} price={item.price} type={item.type} image={item.image} id={item.id} key={item.id} qty={item.qty} />

                    ))}
                </div>: <div className="text-center text-red-600 font-semibold text-2xl"> Not Match Data</div>}
                
                <div className={`bg-gray-300 md:w-[40%] w-full h-screen overflow-auto fixed top-0 right-0 shadow-xl transition-all duration-500 ${showCard ? 'translate-x-0' : 'translate-x-full'} `}>
                    <header className="w-full flex items-center justify-between p-3 ">
                        <span className="text-xl font-semibold">Oder Items </span>
                        <div className="icon text-xl font-semibold hover:rotate-45 transition-all cursor-pointer"><RxCross1 onClick={() => setShowcard(false)} /></div>
                    </header>



                   {cartItems.length >0 ?  <div>
                        {cartItems.map((item) => (
                            <CardItems name={item.name} price={item.price} image={item.image} id={item.id} key={item.id} qty={item.qty} />
                        ))}

                        {/* //////// TAXE WGYRA//////////// */}
                        <div className="w-full border-t-2 border-gray-500 border-b-2 text-xl my-3  font-semibold">
                            <div className="flex justify-between m-3">
                                <span>Subtotal</span>
                                <span>Rs{subtotal}/=</span>
                            </div>

                            <div className="flex justify-between m-3">
                                <span>DeveliryFee</span>
                                <span>Rs{develiryFee}/=</span>
                            </div>

                            <div className="flex justify-between m-3">
                                <span>Taxes</span>
                                <span>Rs{taxes}/=</span>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 font-semibold text-lg">
                            <span>Total</span>
                            <span>Rs{total}/=</span>
                        </div>
                        <div className="mx-auto w-[90%]">
                            <button className=' w-full  h-[40px] font-medium rounded mt-3 text-gray-800 bg-green-500 cursor-pointer hover:bg-green-400'onClick={()=>{toast.success("Order is Placed")}}> place Order</button>
                        </div>
                        
                    </div>: <div className="flex justify-center text-red-500 font-semibold text-2xl"> Cart is empty</div>}
                </div>
            </div>
        </>
    )
}
export default Home