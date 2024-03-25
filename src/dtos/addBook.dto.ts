import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class AddBookDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsInt()
  @IsNotEmpty()
  readonly year_of_publication: number;
}