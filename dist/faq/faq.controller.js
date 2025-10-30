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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqController = void 0;
const common_1 = require("@nestjs/common");
const faq_service_1 = require("./faq.service");
const create_faq_dto_1 = require("./dto/create-faq.dto");
const update_faq_dto_1 = require("./dto/update-faq.dto");
const faq_response_dto_1 = require("./dto/faq-response.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
let FaqController = class FaqController {
    faqService;
    constructor(faqService) {
        this.faqService = faqService;
    }
    async createFaq(createFaqDto, user) {
        return this.faqService.createFaq(createFaqDto, user.id);
    }
    async getAllFaqs(query) {
        return this.faqService.getAllFaqs(query);
    }
    async getFaqById(faqId) {
        return this.faqService.getFaqById(faqId);
    }
    async updateFaq(faqId, updateFaqDto, user) {
        return this.faqService.updateFaq(faqId, updateFaqDto, user.id);
    }
    async deleteFaq(faqId, user) {
        return this.faqService.deleteFaq(faqId, user.id);
    }
};
exports.FaqController = FaqController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faq_dto_1.CreateFaqDto, Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "createFaq", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faq_response_dto_1.FaqListQueryDto]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getAllFaqs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "getFaqById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(2, (0, current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_faq_dto_1.UpdateFaqDto, Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "updateFaq", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FaqController.prototype, "deleteFaq", null);
exports.FaqController = FaqController = __decorate([
    (0, common_1.Controller)('api/admin/faqs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [faq_service_1.FaqService])
], FaqController);
//# sourceMappingURL=faq.controller.js.map