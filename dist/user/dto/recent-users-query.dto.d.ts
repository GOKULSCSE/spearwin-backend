import { UserRole, UserStatus } from '@prisma/client';
export declare class RecentUsersQueryDto {
    role?: UserRole;
    status?: UserStatus;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'lastLoginAt' | 'email';
    sortOrder?: 'asc' | 'desc';
    days?: number;
}
