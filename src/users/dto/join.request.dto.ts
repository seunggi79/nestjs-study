import { ApiProperty, PickType } from "@nestjs/swagger";
import { Users } from "src/entities/Users";

export class JoinRequestDto extends PickType(Users, ['email', 'nickname', 'password'] as const) {
    // @ApiProperty({
    //     example: '제로초',
    //     description: '이메일',
    //     required: true,
    // })
    // public email: string;

    // @ApiProperty({
    //     example: '제로초',
    //     description: '닉네임',
    //     required: true,
    // })
    // public nickname: string;

    // @ApiProperty({
    //     example: '제로초',
    //     description: '패스워드',
    //     required: true,
    // })
    // public password: string;
}