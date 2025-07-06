import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import restaurants from "../utils/mockRestroData";
import Shimmer from "./Shimmer"
const Body = () => {
   let[ListOfRestro,setListOfRestro]=useState([])

    useEffect(()=>{fetchData()},[])
    const fetchData=async ()=>{
        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const responseJSON=await data.json();
        setListOfRestro(responseJSON?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        console.log(responseJSON);
        console.log("Another Restaurant")
        console.log(responseJSON?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
    }
    // if(ListOfRestro.length===0){
    //     return(
    //         <Shimmer/>
    //     )
    // }
    return ListOfRestro.length===0?(<Shimmer/>): (
        
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filtered = ListOfRestro.filter(x => x.info.avgRating >= 4.7);
                    setListOfRestro(filtered)
                }}
                >Top Rated Restaurants</button>
            </div>
             {console.log('return Called')}
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