import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 22
        }
        console.log('Child Constructor called')

    }
    componentDidMount() {
        console.log('Child Component Did Mount called')

    }
    render() {
        console.log('Child Render called')
        console.log(this.props?.name)
        const { name, location, contact } = this.props
        return (
            <div className="user-card">
                <h2>{this.state.count}</h2>
                <h2>{this.state.count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 * 2
                    })
                }}>Count Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact:  {contact}</h3>
            </div>
        )
    }
}
export default UserClass