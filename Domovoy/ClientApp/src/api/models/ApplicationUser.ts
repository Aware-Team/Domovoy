/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Apartment } from './Apartment';
import type { ApartmentRequest } from './ApartmentRequest';
import type { ApplicationUserType } from './ApplicationUserType';
import type { Chat } from './Chat';
import type { ConstructionCompany } from './ConstructionCompany';

export type ApplicationUser = {
    type: ApplicationUserType;
    firstName?: string | null;
    lastName?: string | null;
    patronymic?: string | null;
    /**
     * If Tenant
 * Apartments where user living
     */
    apartments?: Array<Apartment> | null;
    /**
     * If Tenant
 * Apartments that user owns
     */
    owndedApartments?: Array<Apartment> | null;
    mainApartment?: Apartment;
    apartmentRequests?: Array<ApartmentRequest> | null;
    cart?: Array<Apartment> | null;
    constructionCompany?: ConstructionCompany;
    chats?: Array<Chat> | null;
    adminChats?: Array<Chat> | null;
    id?: number;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
};