import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import restaurants from "../utils/mockRestroData";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
const Body = () => {
    console.log('Body is called Called')
    let [ListOfRestro, setListOfRestro] = useState([]) //Won't be modified
    let [FilteredRestro, setFilteredRestro] = useState([])
    const[searchText,setsearchText]=useState("")
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
    // if(ListOfRestro.length===0){
    //     return(
    //         <Shimmer/>
    //     )
    // }
    return ListOfRestro.length === 0 ? (<Shimmer />) : (

        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}onChange={(event) => {
                        // console.log(ListOfRestro);
                        // let valueText=event.target.value;
                        // let filter=ListOfRestro.filter(x=>x.info.name.includes(valueText))
                        // setListOfRestro(filter)
                        // console.log('Evenet', event)
                        let text=event.target.value;
                        setsearchText(text)

                    }}></input>
                    <button className="filterSearch" onClick={()=>{
                        //console.log(searchText)
                        let fil=ListOfRestro.filter(restro=>restro.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestro(fil)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredRestro = ListOfRestro.filter(x => x.info.avgRating >= 4.1);
                    setFilteredRestro(filteredRestro)
                }}
                >Top Rated Restaurants</button>
            </div>
            {/* {console.log('return Called')} */}
            <div className="res-container">
                {/* <RestaurantCard resData={restaurants[0]} />
                <RestaurantCard resData={restaurants[1]} />
                <RestaurantCard resData={restaurants[2]} />
                <RestaurantCard resData={restaurants[3]} />
                <RestaurantCard resData={restaurants[4]} /> */}
                {
                    FilteredRestro.map((x) => (
                       <Link key={x.info.id} to={"/restaurants/"+x.info.id}> <RestaurantCard  resData={x} /></Link>
                    ))
                }



                {/* <RestaurantCard resname="KFC" cusine="Continental" rating="4.4*" ETA="40 min" />
                <RestaurantCard resname="Manis Dum Biryani" /> */}

            </div>
        </div>
    )

}
export default Body;