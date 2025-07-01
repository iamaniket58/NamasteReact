import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s" alt="App-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const McdObject = {
    "info": {
        "id": "43836",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "26K+",
        "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-07-02 02:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [{
                "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                "description": "bolt!"
            }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [{
                        "attributes": {
                            "description": "bolt!",
                            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                        }
                    }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹80 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-9fd78ff9-4bda-437a-84fe-2a7a8cd195f8"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
        "type": "WEBLINK"
    }
}
const RestaurantCard = (props) => {
    {console.log(props)}
    return (

        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"></img> */}
            <img className="res-logo" alt="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+props.resData.info.cloudinaryImageId}></img>
            <h3>{props.resData.info.name}</h3>
            <h4>{props.resData.info.cuisines.join(",")}</h4>
            <h4>{props.resData.info.avgRating}</h4>
            <h4>{props.resData.info.sla.deliveryTime +" min"}</h4>
            <h4>{props.resData.info.costForTwo}</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="image">
                Search Box to be made here
            </div>
            <div className="res-container">
                <RestaurantCard resData={McdObject} />
                {/* <RestaurantCard resname="KFC" cusine="Continental" rating="4.4*" ETA="40 min" />
                <RestaurantCard resname="Manis Dum Biryani" /> */}

            </div>
        </div>
    )

}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("roots"))
root.render(<AppLayout />)