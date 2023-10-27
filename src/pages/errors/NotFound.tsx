import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <Link to='/'>Back To Home</Link>
        </div>
    )
}

export default NotFound;