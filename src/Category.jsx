import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { BiBowlHot } from "react-icons/bi";
import { TbBowlSpoon } from "react-icons/tb";
import { MdOutlineRestaurantMenu } from "react-icons/md";


import { PiHamburgerFill } from "react-icons/pi";



const Category = [

    { id: 1, name: 'All', icon: <TiThSmall /> },
    { id: 2, name: 'Breakfast', icon: <MdFreeBreakfast /> },
    { id: 3, name: 'Pizza', icon: <GiFullPizza /> },
    { id: 4, name: 'Soups', icon: <BiBowlHot />},
    { id: 5, name: 'Pasta', icon: <TbBowlSpoon /> },
    { id: 6, name: 'Burger', icon: <PiHamburgerFill /> },
    { id: 7, name: 'Menu', icon: <MdOutlineRestaurantMenu /> }



]
export default Category
