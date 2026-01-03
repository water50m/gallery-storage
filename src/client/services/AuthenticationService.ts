/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthStatusResponseDto } from '../models/AuthStatusResponseDto';
import type { ChangePasswordDto } from '../models/ChangePasswordDto';
import type { LoginCredentialDto } from '../models/LoginCredentialDto';
import type { LoginResponseDto } from '../models/LoginResponseDto';
import type { LogoutResponseDto } from '../models/LogoutResponseDto';
import type { OAuthAuthorizeResponseDto } from '../models/OAuthAuthorizeResponseDto';
import type { OAuthCallbackDto } from '../models/OAuthCallbackDto';
import type { OAuthConfigDto } from '../models/OAuthConfigDto';
import type { PinCodeChangeDto } from '../models/PinCodeChangeDto';
import type { PinCodeResetDto } from '../models/PinCodeResetDto';
import type { PinCodeSetupDto } from '../models/PinCodeSetupDto';
import type { SessionUnlockDto } from '../models/SessionUnlockDto';
import type { SignUpDto } from '../models/SignUpDto';
import type { UserAdminResponseDto } from '../models/UserAdminResponseDto';
import type { ValidateAccessTokenResponseDto } from '../models/ValidateAccessTokenResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * Register admin
     * Create the first admin user in the system.
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static signUpAdmin(
        requestBody: SignUpDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/admin-sign-up',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change password
     * Change the password of the current user.
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static changePassword(
        requestBody: ChangePasswordDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Login
     * Login with username and password and receive a session token.
     * @param requestBody
     * @returns LoginResponseDto
     * @throws ApiError
     */
    public static login(
        requestBody: LoginCredentialDto,
    ): CancelablePromise<LoginResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Logout
     * Logout the current user and invalidate the session token.
     * @returns LogoutResponseDto
     * @throws ApiError
     */
    public static logout(): CancelablePromise<LogoutResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
        });
    }
    /**
     * Reset pin code
     * Reset the pin code for the current user by providing the account password
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static resetPinCode(
        requestBody: PinCodeResetDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/pin-code',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Setup pin code
     * Setup a new pin code for the current user.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setupPinCode(
        requestBody: PinCodeSetupDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/pin-code',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change pin code
     * Change the pin code for the current user.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static changePinCode(
        requestBody: PinCodeChangeDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/auth/pin-code',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Lock auth session
     * Remove elevated access to locked assets from the current session.
     * @returns void
     * @throws ApiError
     */
    public static lockAuthSession(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/session/lock',
        });
    }
    /**
     * Unlock auth session
     * Temporarily grant the session elevated access to locked assets by providing the correct PIN code.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static unlockAuthSession(
        requestBody: SessionUnlockDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/session/unlock',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve auth status
     * Get information about the current session, including whether the user has a password, and if the session can access locked assets.
     * @returns AuthStatusResponseDto
     * @throws ApiError
     */
    public static getAuthStatus(): CancelablePromise<AuthStatusResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/status',
        });
    }
    /**
     * Validate access token
     * Validate the current authorization method is still valid.
     * @returns ValidateAccessTokenResponseDto
     * @throws ApiError
     */
    public static validateAccessToken(): CancelablePromise<ValidateAccessTokenResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/validateToken',
        });
    }
    /**
     * Start OAuth
     * Initiate the OAuth authorization process.
     * @param requestBody
     * @returns OAuthAuthorizeResponseDto
     * @throws ApiError
     */
    public static startOAuth(
        requestBody: OAuthConfigDto,
    ): CancelablePromise<OAuthAuthorizeResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/authorize',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Finish OAuth
     * Complete the OAuth authorization process by exchanging the authorization code for a session token.
     * @param requestBody
     * @returns LoginResponseDto
     * @throws ApiError
     */
    public static finishOAuth(
        requestBody: OAuthCallbackDto,
    ): CancelablePromise<LoginResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/callback',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Link OAuth account
     * Link an OAuth account to the authenticated user.
     * @param requestBody
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static linkOAuthAccount(
        requestBody: OAuthCallbackDto,
    ): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/link',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Redirect OAuth to mobile
     * Requests to this URL are automatically forwarded to the mobile app, and is used in some cases for OAuth redirecting.
     * @returns any
     * @throws ApiError
     */
    public static redirectOAuthToMobile(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/mobile-redirect',
        });
    }
    /**
     * Unlink OAuth account
     * Unlink the OAuth account from the authenticated user.
     * @returns UserAdminResponseDto
     * @throws ApiError
     */
    public static unlinkOAuthAccount(): CancelablePromise<UserAdminResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/unlink',
        });
    }
}
