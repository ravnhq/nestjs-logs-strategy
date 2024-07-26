import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [ProductsModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
