import { Link } from "react-router-dom"
import Auth from "../auth/Auth"

const NotFound = () => {
    return (
        <>
            <Auth title="Not found" subtitle="Your page is not found">
                <div
                    style={{
                        marginTop: '0px',
                        display: 'flex', // Use flexbox
                        justifyContent: 'center', // Align to the right
                    }}
                >
                    <Link to="/">Back</Link>
                </div>
            </Auth>
        </>
    )
}

export default NotFound;