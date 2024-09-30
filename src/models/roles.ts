export type Role = 'admin' | 'user' | 'guest';

export interface User {
    id: string;
    name: string;
    role: Role;
}

export const rolesPermissions: Record<Role, string[]> = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read'],
};
