import { Navigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import { Role } from '../../models/roles';

interface ProtectedRouteProps {
    roles: Role[];
    element: JSX.Element;
    redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles, element: Component, redirectTo = '/unauthorized' }) => {
    const { user } = useAuth();
    const isAuthorized = user && roles.includes(user.role);

    return isAuthorized ? Component : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
