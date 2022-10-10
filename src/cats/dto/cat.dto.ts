import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '62ea907f46b67fb25773b167',
    description: 'id',
    required: true,
  })
  id: string;
}
