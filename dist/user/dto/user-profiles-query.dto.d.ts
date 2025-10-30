import { UserRole, UserStatus } from '@prisma/client';
export declare class UserProfilesQueryDto {
    search?: string;
    role?: UserRole;
    status?: UserStatus;
    emailVerified?: boolean;
    phoneVerified?: boolean;
    profileCompleted?: boolean;
    twoFactorEnabled?: boolean;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
