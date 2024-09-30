// AuthenticatedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

interface AuthenticatedRouteProps {
    element: JSX.Element;
    redirectTo?: string;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ element: Component, redirectTo = '/login' }) => {
    const { user } = useAuth();

    return user ? Component : <Navigate to={redirectTo} />;
};

export default AuthenticatedRoute;
