/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { WeatherForecast } from "./WeatherForecast";
import { WeatherForecastCountArgs } from "./WeatherForecastCountArgs";
import { WeatherForecastFindManyArgs } from "./WeatherForecastFindManyArgs";
import { WeatherForecastFindUniqueArgs } from "./WeatherForecastFindUniqueArgs";
import { CreateWeatherForecastArgs } from "./CreateWeatherForecastArgs";
import { UpdateWeatherForecastArgs } from "./UpdateWeatherForecastArgs";
import { DeleteWeatherForecastArgs } from "./DeleteWeatherForecastArgs";
import { Location } from "../../location/base/Location";
import { WeatherForecastService } from "../weatherForecast.service";
@graphql.Resolver(() => WeatherForecast)
export class WeatherForecastResolverBase {
  constructor(protected readonly service: WeatherForecastService) {}

  async _weatherForecastsMeta(
    @graphql.Args() args: WeatherForecastCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WeatherForecast])
  async weatherForecasts(
    @graphql.Args() args: WeatherForecastFindManyArgs
  ): Promise<WeatherForecast[]> {
    return this.service.weatherForecasts(args);
  }

  @graphql.Query(() => WeatherForecast, { nullable: true })
  async weatherForecast(
    @graphql.Args() args: WeatherForecastFindUniqueArgs
  ): Promise<WeatherForecast | null> {
    const result = await this.service.weatherForecast(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WeatherForecast)
  async createWeatherForecast(
    @graphql.Args() args: CreateWeatherForecastArgs
  ): Promise<WeatherForecast> {
    return await this.service.createWeatherForecast({
      ...args,
      data: {
        ...args.data,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => WeatherForecast)
  async updateWeatherForecast(
    @graphql.Args() args: UpdateWeatherForecastArgs
  ): Promise<WeatherForecast | null> {
    try {
      return await this.service.updateWeatherForecast({
        ...args,
        data: {
          ...args.data,

          location: args.data.location
            ? {
                connect: args.data.location,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WeatherForecast)
  async deleteWeatherForecast(
    @graphql.Args() args: DeleteWeatherForecastArgs
  ): Promise<WeatherForecast | null> {
    try {
      return await this.service.deleteWeatherForecast(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Location, {
    nullable: true,
    name: "location",
  })
  async getLocation(
    @graphql.Parent() parent: WeatherForecast
  ): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
