import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CatsRequestDto } from './dto/cats.request.dto';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}
  private readonly logger = new Logger(CatsService.name);
  getHello() {
    this.logger.log('getHello');
    return 'cats service hello';
  }

  async signUp(body: CatsRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existsByEmail(email);

    if (isCatExist) {
      throw new HttpException('해당하는 고양이는 이미 존재합니다', 403);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }
}
