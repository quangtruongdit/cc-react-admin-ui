import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../models/roles';

interface AuthContextType {
    user: User | null;
    setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check if the user is authenticated by calling an API endpoint
        const checkAuth = async () => {
            try {
                // const response = await fetch('/api/check-auth', {
                //     credentials: 'include', // Include cookies
                // });
                // if (response.ok) {
                //     setIsAuthenticated(true);
                // } else {
                //     setIsAuthenticated(false);
                // }
                setUser({ id: '', name: '', role: 'user' })
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
