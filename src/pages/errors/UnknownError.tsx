import { Link } from "react-router-dom";

const UnknownError = () => {
    return (
        <div>
            <h1>Something went wrong</h1>
            <Link to='/'>Back To Home</Link>
        </div>
    )
}

export default UnknownError;