import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CommonModule {}
