import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(param: CreateProductDto) {
    return this.prismaService.product.create({ data: param });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(uuid: string) {
    return this.prismaService.product.findUniqueOrThrow({ where: { uuid } });
  }

  update(uuid: string, param: UpdateProductDto) {
    return this.prismaService.product.update({ where: { uuid }, data: param });
  }

  remove(uuid: string) {
    return this.prismaService.product.delete({ where: { uuid } });
  }
}
