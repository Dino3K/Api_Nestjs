import { IsInt } from 'class-validator';

export class CreatePedidoDto {
  @IsInt()
  usuarioId: number;

  @IsInt()
  productoId: number;
}
