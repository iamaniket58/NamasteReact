import { useState } from "react"
import { LOGO_URL } from "../utils/constant"

const Header = () => {
    let [btnName,setbtnName] = useState('LogIn')
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
                        console.log(event   )
                        btnName = btnName=="LogIn"?"LogOut":"LogIn"
                        setbtnName(btnName)
                    }}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;