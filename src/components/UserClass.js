import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                login: "null",
                avatar_url:"null"
            }
        }

    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/iamaniket58')
        const res = await data.json();
        this.setState({
            userInfo: res
        })
        console.log(res)
    }
    componentDidUpdate(){
        console.log('✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅')
    }
    render() {
         const { name, location, login, id,avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                <h2>{id}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact:  {login}</h3>
                <img src={avatar_url} alt="User Pic" ></img>
            </div>
        )
    }
}
export default UserClass