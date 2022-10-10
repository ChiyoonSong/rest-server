import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class CatsRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {
  /*@ApiProperty({
    example: 'bbb@gmail.com',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '1111',
    description: '패스워드',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'blue',
    description: '이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;*/
}


