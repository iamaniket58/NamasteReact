import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)
    const[showIndex,setShowIndex]=useState(null);

    let dummy="Dummy Data";
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2+1]?.card?.card
        console.log('Item Cards',itemCards)
    const category=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card.card['@type'].includes('ItemCategory'))
    console.log('category',category)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* <h2>Menu</h2> */}
            {/* <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul> */}
            {category.map((category,index)=>
            //Controlled Component
            <RestaurantCategory key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems={index==showIndex? true:false}
            setShowIndex={()=>setShowIndex(index)}
            dummy={dummy}
            />
            )}
        </div>
    );
};

export default RestaurantMenu;