import RestaurantCard from "./RestaurantCard"
import restaurants from "../utils/mockRestroData";
const Body = () => {
    return (
        <div className="body">
            <div className="image">
                Search Box to be made here
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={restaurants[0]} />
                <RestaurantCard resData={restaurants[1]} />
                <RestaurantCard resData={restaurants[2]} />
                <RestaurantCard resData={restaurants[3]} />
                <RestaurantCard resData={restaurants[4]} /> */}
                {
                    restaurants.map((x) => (
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