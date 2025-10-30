export declare class FaqResponseDto {
    id: number;
    question: string;
    answer: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FaqListQueryDto {
    search?: string;
    active?: boolean;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export declare class FaqListResponseDto {
    faqs: FaqResponseDto[];
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
}
