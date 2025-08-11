import { useState, useEffect, useContext } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Header = () => {
    console.log('Header Called');
    let {loggedInUser}=useContext(UserContext);
    console.log('USER',loggedInUser)
    let [btnName, setbtnName] = useState('LogIn')
    useEffect(() => {
        console.log("UseEffect called")
    }, [btnName])
    const onlineStatus=useOnlineStatus()
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg  h-30 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-25 h-30"  src={LOGO_URL} alt="App-logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="p-3">Online Status:{onlineStatus?'✅':'🔴'}</li>
                    <li className="p-3"><Link to="/">Home</Link></li>
                    <li className="p-3"><Link to="/about">About</Link></li>
                    <li className="p-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-3">Cart</li>
                    <button className="color" onClick={(event) => {
                        // console.log(event   )
                        // btnName = btnName=="LogIn"?"LogOut":"LogIn"
                        // setbtnName(btnName)
                        setbtnName((prev) => (prev === "LogIn" ? "LogOut" : "LogIn"));
                    }}>{btnName}</button>
                    <li className="p-3 font-bold">{loggedInUser}</li>
                </ul>

            </div>
        </div>
    )
}
export default Header;