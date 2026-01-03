/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationAdminService {
    /**
     * Unlink all OAuth accounts
     * Unlinks all OAuth accounts associated with user accounts in the system.
     * @returns void
     * @throws ApiError
     */
    public static unlinkAllOAuthAccountsAdmin(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/unlink-all',
        });
    }
}
