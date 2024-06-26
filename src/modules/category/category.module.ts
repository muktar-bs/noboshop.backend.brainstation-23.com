// category.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryService } from './providers/category.service';
import { CategoryController } from './controllers/category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // Import the TypeOrmModule and specify the Category entity
  providers: [CategoryService], // Add CategoryService as a provider
  controllers: [CategoryController], // Add CategoryController
  exports: [CategoryService], // Export CategoryService
})
export class CategoryModule {}
