import RestaurantCard from "./RestaurantCard"
import restaurants from "../utils/mockRestroData";
import { useState } from "react";
import restaurants from "../utils/mockRestroData";
const Body = () => {

   let[ListOfRestro,setListOfRestro]=useState(restaurants)

    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button is clicked");
                    const filtered = ListOfRestro.filter(x => x.info.avgRating >= 4.7);
                    setListOfRestro(filtered)
                    console.log(setListOfRestro);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={restaurants[0]} />
                <RestaurantCard resData={restaurants[1]} />
                <RestaurantCard resData={restaurants[2]} />
                <RestaurantCard resData={restaurants[3]} />
                <RestaurantCard resData={restaurants[4]} /> */}
                {
                    ListOfRestro.map((x) => (
                        <RestaurantCard key={x.info.id} resData={x} />
                    ))
                }



                {/* <RestaurantCard resname="KFC" cusine="Continental" rating="4.4*" ETA="40 min" />
                <RestaurantCard resname="Manis Dum Biryani" /> */}

            </div>
        </div>
    )

}
export default Body;