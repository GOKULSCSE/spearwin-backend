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
exports.CandidateRegisterSimpleDto = void 0;
const class_validator_1 = require("class-validator");
class CandidateRegisterSimpleDto {
    fullName;
    email;
    password;
    reenterPassword;
}
exports.CandidateRegisterSimpleDto = CandidateRegisterSimpleDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Full name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Full name is required' }),
    __metadata("design:type", String)
], CandidateRegisterSimpleDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], CandidateRegisterSimpleDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password must be at least 6 characters long' }),
    __metadata("design:type", String)
], CandidateRegisterSimpleDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Re-enter password must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Re-enter password is required' }),
    __metadata("design:type", String)
], CandidateRegisterSimpleDto.prototype, "reenterPassword", void 0);
//# sourceMappingURL=candidate-register-simple.dto.js.map