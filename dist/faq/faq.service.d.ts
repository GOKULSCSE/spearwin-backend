import { DatabaseService } from '../database/database.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { FaqResponseDto, FaqListQueryDto, FaqListResponseDto } from './dto/faq-response.dto';
export declare class FaqService {
    private readonly db;
    constructor(db: DatabaseService);
    private handleException;
    createFaq(createFaqDto: CreateFaqDto, userId: string): Promise<FaqResponseDto>;
    getAllFaqs(query: FaqListQueryDto): Promise<FaqListResponseDto>;
    getFaqById(faqId: string): Promise<FaqResponseDto>;
    updateFaq(faqId: string, updateFaqDto: UpdateFaqDto, userId: string): Promise<FaqResponseDto>;
    deleteFaq(faqId: string, userId: string): Promise<{
        message: string;
    }>;
}
