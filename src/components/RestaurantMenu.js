import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [menuItems, setmenuItems] = useState([]);
    const { resId } = useParams();
    useEffect(() => { fetchMenu() }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const res = await data.json();
        console.log('Response is:', res.data)
        console.log(res?.data?.cards[2]?.card?.card?.info)
        let info = res?.data?.cards[2]?.card?.card?.info
        setResInfo(info)
        let menu = res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards //|| res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards
        setmenuItems(menu)
        console.log(menu)
    }
    const { name, cuisines, totalRatingsString, cloudinaryImageId, costForTwoMessage } = resInfo
    return resInfo.length == 0 ? (<Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}- {costForTwoMessage}</h3>
            <h3>{totalRatingsString}</h3>

            <h4>Menu</h4>
            <ul>
                {menuItems.map(item =>
                    <li key={item.card.info.id}>
                        {item.card.info.name} -Rs  {(item?.card?.info?.price) / 100 || (item?.card?.info?.defaultPrice) / 100}
                    </li>)}
                {/* <li>{menuItems[0]?.card?.info?.name}</li>
                <li>{menuItems[1]?.card?.info?.name}</li>
                <li>{menuItems[2]?.card?.info?.name}</li> */}
            </ul>
        </div>
    )
}
export default RestaurantMenu