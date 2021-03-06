/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApartmentCreate } from '../models/ApartmentCreate';
import type { ApartmentHouseCreate } from '../models/ApartmentHouseCreate';
import type { ApartmentPut } from '../models/ApartmentPut';
import type { ApartmentViewModel } from '../models/ApartmentViewModel';
import type { ConstructionCompanyDetails } from '../models/ConstructionCompanyDetails';
import type { HouseEntranceCreate } from '../models/HouseEntranceCreate';
import type { HouseEntranceDetails } from '../models/HouseEntranceDetails';
import type { ResidentialComplexCreate } from '../models/ResidentialComplexCreate';
import type { SmartHomeDeviceCreate } from '../models/SmartHomeDeviceCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConstructionCompanyService {

    /**
     * @returns ConstructionCompanyDetails Success
     * @throws ApiError
     */
    public static getApiConstructioncompany(): CancelablePromise<ConstructionCompanyDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/constructioncompany',
        });
    }

    /**
     * @param id 
     * @param search 
     * @returns HouseEntranceDetails Success
     * @throws ApiError
     */
    public static getApiConstructioncompanyHouses(
id: number,
search?: string,
): CancelablePromise<Array<HouseEntranceDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/constructioncompany/houses/{id}',
            path: {
                'id': id,
            },
            query: {
                'search': search,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiConstructioncompanyHouses(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/constructioncompany/houses/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiConstructioncompanyComplexes(
requestBody?: ResidentialComplexCreate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/constructioncompany/complexes',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiConstructioncompanyComplexes(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/constructioncompany/complexes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiConstructioncompanyHouses(
requestBody?: ApartmentHouseCreate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/constructioncompany/houses',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiConstructioncompanyEntrances(
requestBody?: HouseEntranceCreate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/constructioncompany/entrances',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiConstructioncompanyEntrances(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/constructioncompany/entrances/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiConstructioncompanyApartments(
requestBody?: ApartmentCreate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/constructioncompany/apartments',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiConstructioncompanyApartments(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/constructioncompany/apartments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns ApartmentViewModel Success
     * @throws ApiError
     */
    public static getApiConstructioncompanyApartments(
id: number,
): CancelablePromise<ApartmentViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/constructioncompany/apartments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns ApartmentViewModel Success
     * @throws ApiError
     */
    public static putApiConstructioncompanyApartments(
id: number,
requestBody?: ApartmentPut,
): CancelablePromise<ApartmentViewModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/constructioncompany/apartments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param apartmentId 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiConstructioncompanyCodes(
apartmentId?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/constructioncompany/codes',
            query: {
                'apartmentId': apartmentId,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiConstructioncompanyCodes(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/constructioncompany/codes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param apartmentId 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiConstructioncompanyApartmentsDevices(
apartmentId: number,
requestBody?: SmartHomeDeviceCreate,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/constructioncompany/apartments/{apartmentId}/devices',
            path: {
                'apartmentId': apartmentId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param deviceId 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiConstructioncompanyDevices(
deviceId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/constructioncompany/devices/{deviceId}',
            path: {
                'deviceId': deviceId,
            },
        });
    }

}