import { UserRole, UserStatus } from '@prisma/client';
export declare class RecentUserResponseDto {
    id: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    emailVerified: boolean;
    phoneVerified: boolean;
    profileCompleted: boolean;
    twoFactorEnabled: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    daysSinceRegistration: number;
    isNewUser: boolean;
    hasLoggedIn: boolean;
    lastActivityAt: Date | null;
}
export declare class RecentUsersResponseDto {
    users: RecentUserResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    statistics: {
        totalUsers: number;
        newUsers: number;
        activeUsers: number;
        inactiveUsers: number;
        byRole: Record<UserRole, number>;
        byStatus: Record<UserStatus, number>;
    };
    timeRange: {
        startDate: Date;
        endDate: Date;
        days: number;
    };
}
