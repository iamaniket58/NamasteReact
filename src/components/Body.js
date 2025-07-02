import RestaurantCard from "./RestaurantCard"
import restaurants from "../utils/mockRestroData";
import { useState } from "react";
import restaurants from "../utils/mockRestroData";
const Body = () => {
    // let ListOfRestro1 = [
    //     {
    //         info: {
    //             id: "334475",
    //             name: "KFC",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg",
    //             "cuisines": [
    //                 "Burgers",
    //                 "Beverages",
    //                 "Cafe",
    //                 "Desserts"
    //             ],
    //             avgRating: 3.4,
    //             "costForTwo": "₹400 for two",
    //         }
    //     },
    //     {
    //         info: {
    //             id: "334474",
    //             name: "Dominos",
    //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg",
    //             "cuisines": [
    //                 "Burgers",
    //                 "Beverages",
    //                 "Cafe",
    //                 "Desserts"
    //             ],
    //             avgRating: 4.9,
    //             "costForTwo": "₹400 for two",
    //         }
    //     }
    // ];

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