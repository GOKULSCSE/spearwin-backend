"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let FaqService = class FaqService {
    db;
    constructor(db) {
        this.db = db;
    }
    handleException(error) {
        if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
            throw error;
        }
        throw new common_1.InternalServerErrorException('Internal server error');
    }
    async createFaq(createFaqDto, userId) {
        try {
            const faq = await this.db.fAQ.create({
                data: {
                    question: createFaqDto.question,
                    answer: createFaqDto.answer,
                    active: createFaqDto.active ?? false,
                },
            });
            return {
                id: faq.id,
                question: faq.question,
                answer: faq.answer,
                active: faq.active,
                createdAt: faq.createdAt,
                updatedAt: faq.updatedAt,
            };
        }
        catch (error) {
            this.handleException(error);
            throw error;
        }
    }
    async getAllFaqs(query) {
        try {
            const limit = query.limit || 10;
            const offset = query.offset || 0;
            const search = query.search?.trim();
            const sortBy = query.sortBy || 'createdAt';
            const sortOrder = query.sortOrder || 'desc';
            const where = {};
            if (search) {
                where.OR = [
                    { question: { contains: search, mode: 'insensitive' } },
                    { answer: { contains: search, mode: 'insensitive' } },
                ];
            }
            if (query.active !== undefined) {
                where.active = query.active;
            }
            const orderBy = {};
            orderBy[sortBy] = sortOrder;
            const [total, faqs] = await Promise.all([
                this.db.fAQ.count({ where }),
                this.db.fAQ.findMany({
                    where,
                    orderBy,
                    skip: offset,
                    take: limit,
                }),
            ]);
            return {
                faqs: faqs.map((faq) => ({
                    id: faq.id,
                    question: faq.question,
                    answer: faq.answer,
                    active: faq.active,
                    createdAt: faq.createdAt,
                    updatedAt: faq.updatedAt,
                })),
                total,
                limit,
                offset,
                hasMore: offset + limit < total,
            };
        }
        catch (error) {
            this.handleException(error);
            throw error;
        }
    }
    async getFaqById(faqId) {
        try {
            const faq = await this.db.fAQ.findUnique({
                where: { id: parseInt(faqId) },
            });
            if (!faq) {
                throw new common_1.NotFoundException(`FAQ with ID ${faqId} not found`);
            }
            return {
                id: faq.id,
                question: faq.question,
                answer: faq.answer,
                active: faq.active,
                createdAt: faq.createdAt,
                updatedAt: faq.updatedAt,
            };
        }
        catch (error) {
            this.handleException(error);
            throw error;
        }
    }
    async updateFaq(faqId, updateFaqDto, userId) {
        try {
            const id = parseInt(faqId);
            if (isNaN(id)) {
                throw new common_1.BadRequestException('Invalid FAQ ID');
            }
            const existingFaq = await this.db.fAQ.findUnique({
                where: { id },
            });
            if (!existingFaq) {
                throw new common_1.NotFoundException(`FAQ with ID ${faqId} not found`);
            }
            const updateData = {};
            if (updateFaqDto.question !== undefined)
                updateData.question = updateFaqDto.question;
            if (updateFaqDto.answer !== undefined)
                updateData.answer = updateFaqDto.answer;
            if (updateFaqDto.active !== undefined)
                updateData.active = updateFaqDto.active;
            const updatedFaq = await this.db.fAQ.update({
                where: { id },
                data: updateData,
            });
            return {
                id: updatedFaq.id,
                question: updatedFaq.question,
                answer: updatedFaq.answer,
                active: updatedFaq.active,
                createdAt: updatedFaq.createdAt,
                updatedAt: updatedFaq.updatedAt,
            };
        }
        catch (error) {
            this.handleException(error);
            throw error;
        }
    }
    async deleteFaq(faqId, userId) {
        try {
            const id = parseInt(faqId);
            if (isNaN(id)) {
                throw new common_1.BadRequestException('Invalid FAQ ID');
            }
            const existingFaq = await this.db.fAQ.findUnique({
                where: { id },
            });
            if (!existingFaq) {
                throw new common_1.NotFoundException(`FAQ with ID ${faqId} not found`);
            }
            await this.db.fAQ.delete({
                where: { id },
            });
            return {
                message: `FAQ "${existingFaq.question}" has been deleted successfully`,
            };
        }
        catch (error) {
            this.handleException(error);
            throw error;
        }
    }
};
exports.FaqService = FaqService;
exports.FaqService = FaqService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], FaqService);
//# sourceMappingURL=faq.service.js.map