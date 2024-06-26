/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  WeatherForecast as PrismaWeatherForecast,
  Location as PrismaLocation,
} from "@prisma/client";

export class WeatherForecastServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WeatherForecastCountArgs, "select">
  ): Promise<number> {
    return this.prisma.weatherForecast.count(args);
  }

  async weatherForecasts<T extends Prisma.WeatherForecastFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherForecastFindManyArgs>
  ): Promise<PrismaWeatherForecast[]> {
    return this.prisma.weatherForecast.findMany<Prisma.WeatherForecastFindManyArgs>(
      args
    );
  }
  async weatherForecast<T extends Prisma.WeatherForecastFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherForecastFindUniqueArgs>
  ): Promise<PrismaWeatherForecast | null> {
    return this.prisma.weatherForecast.findUnique(args);
  }
  async createWeatherForecast<T extends Prisma.WeatherForecastCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherForecastCreateArgs>
  ): Promise<PrismaWeatherForecast> {
    return this.prisma.weatherForecast.create<T>(args);
  }
  async updateWeatherForecast<T extends Prisma.WeatherForecastUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherForecastUpdateArgs>
  ): Promise<PrismaWeatherForecast> {
    return this.prisma.weatherForecast.update<T>(args);
  }
  async deleteWeatherForecast<T extends Prisma.WeatherForecastDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WeatherForecastDeleteArgs>
  ): Promise<PrismaWeatherForecast> {
    return this.prisma.weatherForecast.delete(args);
  }

  async getLocation(parentId: string): Promise<PrismaLocation | null> {
    return this.prisma.weatherForecast
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }
}
