import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useEffect, useState } from "react";
import restaurants from "../utils/mockRestroData";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    console.log('Body is called Called')
    let [ListOfRestro, setListOfRestro] = useState([]) //Won't be modified
    let [FilteredRestro, setFilteredRestro] = useState([])
    const [searchText, setsearchText] = useState("")
    const RestroCardPromoted = withPromotedLabel(RestaurantCard)
    useEffect(() => { fetchData() }, [])
    const fetchData = async () => {
        console.log('API Called')
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const responseJSON = await data.json();
        setListOfRestro(responseJSON?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestro(responseJSON?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        // console.log(responseJSON);
        // console.log("Another Restaurant")
        // console.log(responseJSON?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
    }
    console.log('ListOfRestro ', ListOfRestro)
    // if(ListOfRestro.length===0){
    //     return(
    //         <Shimmer/>
    //     )
    // }
    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return (
            <h1>Looks like Your Offline, Check your internet Connection</h1>
        )
    }
    return ListOfRestro.length === 0 ? (<Shimmer />) : (

        <div className="body">
            <div className="flex">
                <div className="m-2 p-2">
                    <input type="text" className="m-1 border border-solid border-black " value={searchText} onChange={(event) => {
                        let text = event.target.value;
                        setsearchText(text)

                    }}></input>
                    <button className="m-2 bg-green-100  cursor-pointer px-4 py-0.5 rounded-lg" onClick={() => {
                        //console.log(searchText)
                        let fil = ListOfRestro.filter(restro => restro.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestro(fil)
                    }}>Search</button>
                </div>
                <div className="flex items-center p-5">
                    <button className="bg-gray-100 cursor-pointer" onClick={() => {
                        const filteredRestro = ListOfRestro.filter(x => x.info.avgRating >= 4.1);
                        setFilteredRestro(filteredRestro)
                    }}
                    >Top Rated Restaurants</button>
                </div>

            </div>
            {/* {console.log('return Called')} */}
            <div className="flex flex-wrap justify-around">
                {/* <RestaurantCard resData={restaurants[0]} />
                <RestaurantCard resData={restaurants[1]} />
                <RestaurantCard resData={restaurants[2]} />
                <RestaurantCard resData={restaurants[3]} />
                <RestaurantCard resData={restaurants[4]} /> */}
                {
                    FilteredRestro.map((x) => (
                        <Link key={x.info.id} to={"/restaurants/" + x.info.id}>
                            {!x.info?.isOpen?<RestaurantCard resData={x} />:<RestroCardPromoted resData={x}/>}
                            

                        </Link>
                    ))
                }



                {/* <RestaurantCard resname="KFC" cusine="Continental" rating="4.4*" ETA="40 min" />
                <RestaurantCard resname="Manis Dum Biryani" /> */}

            </div>
        </div>
    )

}
export default Body;