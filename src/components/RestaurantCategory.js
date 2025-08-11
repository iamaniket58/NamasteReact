import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = (props) => {
    console.log('Propss', props)
    const[showItems,setshowItems]=useState(false)
    const handleClick = () => {
        // showItems?setshowItems(false):setshowItems(true)
        setshowItems(!showItems)
    }
    return (

        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 " onClick={handleClick}>
                <div className="flex justify-between cursor-pointer">
                    <span className="font-bold text-lg"> {props.data.title}  ({props?.data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {showItems &&<ItemList data={props?.data?.itemCards} />}
                </div>
            </div>

        </div>
    )
}
export default RestaurantCategory