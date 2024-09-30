import { Link } from "react-router-dom"
import Auth from "../auth/Auth"

export const UnAuthorized = () => {
    return (
        <>
            <Auth title="UnAuthorized" subtitle="Please login with admin role">
                <div
                    style={{
                        marginTop: '0px',
                        display: 'flex', // Use flexbox
                        justifyContent: 'center', // Align to the right
                    }}
                >
                    <Link to="/login">Login</Link>
                </div>
            </Auth>
        </>
    )
}