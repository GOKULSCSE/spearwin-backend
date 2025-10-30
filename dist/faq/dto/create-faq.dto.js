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
exports.CreateFaqDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateFaqDto {
    question;
    answer;
    active = false;
}
exports.CreateFaqDto = CreateFaqDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Question must be a string' }),
    (0, class_validator_1.MinLength)(5, { message: 'Question must be at least 5 characters long' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Question must not exceed 500 characters' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], CreateFaqDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Answer must be a string' }),
    (0, class_validator_1.MinLength)(10, { message: 'Answer must be at least 10 characters long' }),
    (0, class_validator_1.MaxLength)(2000, { message: 'Answer must not exceed 2000 characters' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], CreateFaqDto.prototype, "answer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'Active must be a boolean value' }),
    __metadata("design:type", Boolean)
], CreateFaqDto.prototype, "active", void 0);
//# sourceMappingURL=create-faq.dto.js.map