import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../producto/producto.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepo: Repository<Pedido>,
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(data: CreatePedidoDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id: data.usuarioId });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const producto = await this.productoRepo.findOneBy({ id: data.productoId });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const pedido = this.pedidoRepo.create({
      usuario,
      producto,
    });
    return this.pedidoRepo.save(pedido);
  }

  findAll() {
    return this.pedidoRepo.find();
  }

  async findOne(id: number) {
    const pedido = await this.pedidoRepo.findOneBy({ id });
    if (!pedido) throw new NotFoundException('Pedido no encontrado');
    return pedido;
  }

  async update(id: number, data: UpdatePedidoDto) {
    const pedido = await this.findOne(id);

    if (data.usuarioId) {
      const usuario = await this.usuarioRepo.findOneBy({ id: data.usuarioId });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      pedido.usuario = usuario;
    }

    if (data.productoId) {
      const producto = await this.productoRepo.findOneBy({
        id: data.productoId,
      });
      if (!producto) throw new NotFoundException('Producto no encontrado');
      pedido.producto = producto;
    }

    return this.pedidoRepo.save(pedido);
  }

  async remove(id: number) {
    const pedido = await this.findOne(id);
    return this.pedidoRepo.remove(pedido);
  }
}
