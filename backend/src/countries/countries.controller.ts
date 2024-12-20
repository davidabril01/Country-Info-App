import { Controller, Get, Param } from "@nestjs/common";
import { CountriesService } from "./countries.service";


@Controller("countries")
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) {}

    // Endpoint existente para obtener países disponibles
    @Get()
    async getAvailableCountries() {
        return this.countriesService.getAvailableCountries();
    }

    // Endpoint existente para obtener la información de un país
    @Get(":code")
    async getCountryInfo(@Param("code") code: string) {
        return this.countriesService.getCountryInfo(code);
    }

    // Nuevo endpoint para obtener los datos de población histórica
    @Get(':code/population')
    async getPopulation(@Param('code') countryName: string) {
        try {
            const populationData = await this.countriesService.getPopulationData(countryName);
            return populationData;
        } catch (error) {
            return {
                error: true,
                message: `Error al obtener los datos de población para ${countryName}`,
            };
        }
    }

    // Nuevo endpoint para obtener la URL de la bandera
    @Get(":code/flag")
    async getFlagUrl(@Param("code") @Param('code') countryName: string) {
        try {
            const FlagUrl = await this.countriesService.getFlagUrl(countryName);
            return FlagUrl;
        } catch (error) {
            return {
                error: true,
                message: `Error al obtener los datos de población para ${countryName}`,
            };
        }
    }      
}
