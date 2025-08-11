import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";
class About extends React.Component {

    constructor(props) {
        super(props);
        console.log('Parent Constructor called')

    }
    componentDidMount() {
        console.log('Parent Component Did Mount called')

    }
    render() {
        console.log('Parent Render called')

        return (
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {(data)=><h1>data.loggedInUser</h1>}
                    </UserContext.Consumer>
                </div>
                <p>lorem22</p>
                {/* <User name={"Awesome Aniket"} T="They way" /> */}
                <UserClass name={"Awesome Aniket "} location="Bengaluru Class" contact="aniket58" />
            </div>
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <p>lorem22</p>
//             <User name={"Awesome Aniket"} T="They way"/>
//             <UserClass name={"Awesome Aniket class bases Comp"} location="Bengaluru Class" contact="aniket58"/>
//         </div>
//     )
// }
export default About