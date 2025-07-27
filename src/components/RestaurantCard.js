import { Component } from "react";
import { CDN_URL } from "../utils/constant"
const RestaurantCard = (props) => {
    { console.log('Props is',props) }
    let { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = props?.resData?.info
    return (

        <div className="m-1 p-2 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400" >
            {/* style={{ backgroundColor: "#f0f0f0" }} */}
            {/* <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"></img> */}
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <h4 className="wrap-break-word">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            {/* <h4>{sla.deliveryTime + " mins"}</h4> */}
            <h4>{costForTwo}</h4>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-1 rounded-b-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>

        )
    }
}
export default RestaurantCard;