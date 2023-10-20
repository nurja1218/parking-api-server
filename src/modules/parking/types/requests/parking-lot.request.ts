import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { ParkingSpaceRequest } from './parking-space.request';
import { Type } from 'class-transformer';

export class ParkingLotRequest {
  @ApiProperty({ description: '주차장 이름' })
  @IsString()
  name: string;

  @ApiProperty({ description: '주차장 위치' })
  @IsString()
  location: string;

  @ApiProperty({ description: '총 주차 공간 수' })
  @IsNumber()
  totalSpaces: number;

  @ApiProperty({ description: '사용 가능한 주차 공간 수', required: false })
  @IsOptional()
  @IsNumber()
  availableSpaces?: number;

  @ApiProperty({
    description: '주차장의 주차 공간 목록',
    type: () => [ParkingSpaceRequest],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @Type(() => ParkingSpaceRequest)
  spaces?: ParkingSpaceRequest[];
}
