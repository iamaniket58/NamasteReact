import { useRouteError } from "react-router-dom"
const Error = () => {
    const x = useRouteError();
    console.log(x)
    return (
        <div>
            <h1>Oops.. Something went wrong</h1>
            <h2>{x.status}</h2>
            <h2>{x.data}</h2>
        </div>
    )
}
export default Error