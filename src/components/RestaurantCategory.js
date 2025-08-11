import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    console.log('Propdatass', data,'Hi',showItems,'Hi2',setShowIndex)
    // const[showItems,setshowItems]=useState(false)
    const handleClick = () => {
        // showItems?setshowItems(false):setshowItems(true)
        // setshowItems(!showItems)
        setShowIndex()
    }
    // let showItems=false;
    return (

        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 " onClick={handleClick}>
                <div className="flex justify-between cursor-pointer">
                    <span className="font-bold text-lg"> {data.title}  ({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {showItems &&<ItemList data={data?.itemCards} />}
                </div>
            </div>

        </div>
    )
}
export default RestaurantCategory