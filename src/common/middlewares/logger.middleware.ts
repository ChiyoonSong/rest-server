import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`REQ ${req.ip} ${req.method} ${req.originalUrl}`);
    const now = Date.now();

    res.on('finish', () => {
      this.logger.log(
        `RES ${req.ip} ${req.method} ${req.originalUrl} ${res.statusCode} +${
          Date.now() - now
        }ms`,
      );
    });
    next();
  }
}
