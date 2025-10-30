import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { FaqResponseDto, FaqListQueryDto, FaqListResponseDto } from './dto/faq-response.dto';
import type { CurrentUser } from '../auth/decorators/current-user.decorator';
export declare class FaqController {
    private readonly faqService;
    constructor(faqService: FaqService);
    createFaq(createFaqDto: CreateFaqDto, user: CurrentUser): Promise<FaqResponseDto>;
    getAllFaqs(query: FaqListQueryDto): Promise<FaqListResponseDto>;
    getFaqById(faqId: string): Promise<FaqResponseDto>;
    updateFaq(faqId: string, updateFaqDto: UpdateFaqDto, user: CurrentUser): Promise<FaqResponseDto>;
    deleteFaq(faqId: string, user: CurrentUser): Promise<{
        message: string;
    }>;
}
