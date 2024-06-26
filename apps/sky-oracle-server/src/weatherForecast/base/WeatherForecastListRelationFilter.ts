/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WeatherForecastWhereInput } from "./WeatherForecastWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WeatherForecastListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WeatherForecastWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherForecastWhereInput)
  @IsOptional()
  @Field(() => WeatherForecastWhereInput, {
    nullable: true,
  })
  every?: WeatherForecastWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeatherForecastWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherForecastWhereInput)
  @IsOptional()
  @Field(() => WeatherForecastWhereInput, {
    nullable: true,
  })
  some?: WeatherForecastWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeatherForecastWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherForecastWhereInput)
  @IsOptional()
  @Field(() => WeatherForecastWhereInput, {
    nullable: true,
  })
  none?: WeatherForecastWhereInput;
}
export { WeatherForecastListRelationFilter as WeatherForecastListRelationFilter };
