import { IsString, IsNumber, IsInt } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsInt()
  categoriaId: number;
}
