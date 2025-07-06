import { useState, useEffect } from "react"
import { LOGO_URL } from "../utils/constant"

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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