import { useState, useEffect } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"

const Header = () => {
    console.log('Header Called')
    let [btnName, setbtnName] = useState('LogIn')
    useEffect(() => {
        console.log("UseEffect called")
    },[btnName])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="App-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={(event) => {
                        // console.log(event   )
                        // btnName = btnName=="LogIn"?"LogOut":"LogIn"
                        // setbtnName(btnName)
                        setbtnName((prev) => (prev === "LogIn" ? "LogOut" : "LogIn"));
                    }}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;