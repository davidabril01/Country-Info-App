import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";
import * as iso3166 from 'iso-3166-1';

@Injectable()
export class CountriesService {
    constructor(private readonly httpService: HttpService) {}

    // Método existente para obtener países disponibles
    async getAvailableCountries() {
        const url = "https://date.nager.at/api/v3/AvailableCountries";
        const response = await lastValueFrom(this.httpService.get(url));
        return response.data;
    }

    // Método existente para obtener la información de un país
    async getCountryInfo(code: string) {
        const url = `https://date.nager.at/api/v3/CountryInfo/${code}`;
        const response = await lastValueFrom(this.httpService.get(url));
        return response.data;
    }

    // Nuevo método para obtener los datos de población histórica

    // Servicio para obtener población histórica
    async getPopulationData(codeIso2: string) {
        const url = "https://countriesnow.space/api/v0.1/countries/population";
        
        try {
            // Convierte el código ISO2 a ISO3 usando la librería
            const country = iso3166.whereAlpha2(codeIso2.toUpperCase());
        
            if (!country) {
                throw new Error(`No se encontró el código ISO3 para el código ISO2: ${codeIso2}`);
            }
        
            // Realiza la solicitud GET con el código ISO3
            const response = await lastValueFrom(this.httpService.get(url));
        
            // Filtra los datos para encontrar el país correspondiente utilizando country.alpha3
            const countryData = response.data.data.find((data: any) => data.code === country.alpha3);
        
            // Si se encuentra el país, devuelve su información de población
            if (countryData) {
                return countryData.populationCounts;
            } else {
                throw new Error(`Country with code ${country.alpha3} not found`);
            }
        } catch (error) {
            console.error("Error al obtener población:", error);
            throw error;
        }
    }
    
    

    // Servicio para obtener la URL de la bandera
    async getFlagUrl(code: string) {
        const url = "https://countriesnow.space/api/v0.1/countries/flag/images";
        try {
            const response = await lastValueFrom(this.httpService.get(url));
            const countryFlag = response.data.data.find((codee: any) => codee.iso2 === code);
            if (countryFlag) {
                return countryFlag.flag;
            } else {
                throw new Error(`Country ${code} not found`);
            }
        } catch (error) {
            console.error("Error al obtener la bandera:", error);
            throw error;
        }
    }
}
