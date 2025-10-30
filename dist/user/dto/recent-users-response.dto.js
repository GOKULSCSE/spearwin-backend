"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentUsersResponseDto = exports.RecentUserResponseDto = void 0;
class RecentUserResponseDto {
    id;
    email;
    role;
    status;
    emailVerified;
    phoneVerified;
    profileCompleted;
    twoFactorEnabled;
    lastLoginAt;
    createdAt;
    updatedAt;
    daysSinceRegistration;
    isNewUser;
    hasLoggedIn;
    lastActivityAt;
}
exports.RecentUserResponseDto = RecentUserResponseDto;
class RecentUsersResponseDto {
    users;
    total;
    page;
    limit;
    totalPages;
    statistics;
    timeRange;
}
exports.RecentUsersResponseDto = RecentUsersResponseDto;
//# sourceMappingURL=recent-users-response.dto.js.map