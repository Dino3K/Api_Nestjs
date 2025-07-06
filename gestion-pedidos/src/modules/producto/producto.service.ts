import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Categoria } from '../categoria/categoria.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) {}

  async create(data: CreateProductoDto) {
    const categoria = await this.categoriaRepo.findOneBy({
      id: data.categoriaId,
    });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');
    const producto = this.productoRepo.create({
      nombre: data.nombre,
      precio: data.precio,
      categoria,
    });
    return this.productoRepo.save(producto);
  }

  findAll() {
    return this.productoRepo.find();
  }

  async findOne(id: number) {
    const producto = await this.productoRepo.findOneBy({ id });
    if (!producto) throw new NotFoundException('Producto no encontrado');
    return producto;
  }

  async update(id: number, data: UpdateProductoDto) {
    const producto = await this.findOne(id);
    if (data.categoriaId) {
      const categoria = await this.categoriaRepo.findOneBy({
        id: data.categoriaId,
      });
      if (!categoria) throw new NotFoundException('Categoría no encontrada');
      producto.categoria = categoria;
    }
    Object.assign(producto, data);
    return this.productoRepo.save(producto);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productoRepo.remove(producto);
  }
}
