import { IsEmail, IsOptional, IsString, Length, MaxLength, MinLength } from 'class-validator'

export class LeadDto {
    @IsString()
    @MinLength(2)
    @MaxLength(120)
    name!: string

    @IsEmail()
    email!: string

    @IsString()
    @MinLength(5)
    @MaxLength(40)
    phone!: string

    @IsString()
    @MinLength(5)
    @MaxLength(2000)
    message!: string

    @IsOptional()
    utm?: Record<string, string>
}
