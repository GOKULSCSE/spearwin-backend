import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class PasswordMatchConstraint implements ValidatorConstraintInterface {
    validate(reenterPassword: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CandidateSimpleRegisterDto {
    fullName: string;
    email: string;
    password: string;
    reenterPassword: string;
}
