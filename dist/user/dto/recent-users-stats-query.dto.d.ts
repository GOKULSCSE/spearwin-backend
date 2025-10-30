import { UserStatus } from '@prisma/client';
export declare class RecentUsersStatsQueryDto {
    status?: UserStatus;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'lastLoginAt' | 'email';
    sortOrder?: 'asc' | 'desc';
    days?: number;
}
