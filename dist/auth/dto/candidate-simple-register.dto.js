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
exports.CandidateSimpleRegisterDto = exports.PasswordMatchConstraint = void 0;
const class_validator_1 = require("class-validator");
let PasswordMatchConstraint = class PasswordMatchConstraint {
    validate(reenterPassword, args) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = args.object[relatedPropertyName];
        return reenterPassword === relatedValue;
    }
    defaultMessage(args) {
        return 'Passwords do not match';
    }
};
exports.PasswordMatchConstraint = PasswordMatchConstraint;
exports.PasswordMatchConstraint = PasswordMatchConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'passwordMatch', async: false })
], PasswordMatchConstraint);
class CandidateSimpleRegisterDto {
    fullName;
    email;
    password;
    reenterPassword;
}
exports.CandidateSimpleRegisterDto = CandidateSimpleRegisterDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Full name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Full name is required' }),
    __metadata("design:type", String)
], CandidateSimpleRegisterDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], CandidateSimpleRegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password must be at least 6 characters long' }),
    __metadata("design:type", String)
], CandidateSimpleRegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Re-enter password must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Re-enter password is required' }),
    (0, class_validator_1.Validate)(PasswordMatchConstraint, ['password']),
    __metadata("design:type", String)
], CandidateSimpleRegisterDto.prototype, "reenterPassword", void 0);
//# sourceMappingURL=candidate-simple-register.dto.js.map