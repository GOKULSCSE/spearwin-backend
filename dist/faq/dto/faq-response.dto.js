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
exports.FaqListResponseDto = exports.FaqListQueryDto = exports.FaqResponseDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class FaqResponseDto {
    id;
    question;
    answer;
    active;
    createdAt;
    updatedAt;
}
exports.FaqResponseDto = FaqResponseDto;
class FaqListQueryDto {
    search;
    active;
    limit = 10;
    offset = 0;
    sortBy = 'createdAt';
    sortOrder = 'desc';
}
exports.FaqListQueryDto = FaqListQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Search must be a string' }),
    __metadata("design:type", String)
], FaqListQueryDto.prototype, "search", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'Active filter must be a boolean' }),
    __metadata("design:type", Boolean)
], FaqListQueryDto.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Limit must be a number' }),
    (0, class_validator_1.Min)(1, { message: 'Limit must be at least 1' }),
    (0, class_validator_1.Max)(1000, { message: 'Limit must not exceed 1000' }),
    __metadata("design:type", Number)
], FaqListQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Offset must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Offset must be at least 0' }),
    __metadata("design:type", Number)
], FaqListQueryDto.prototype, "offset", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Sort by must be a string' }),
    __metadata("design:type", String)
], FaqListQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Sort order must be a string' }),
    __metadata("design:type", String)
], FaqListQueryDto.prototype, "sortOrder", void 0);
class FaqListResponseDto {
    faqs;
    total;
    limit;
    offset;
    hasMore;
}
exports.FaqListResponseDto = FaqListResponseDto;
//# sourceMappingURL=faq-response.dto.js.map