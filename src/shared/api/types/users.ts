/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health */
    get: operations['health_health_get'];
  };
  '/api/rest/auth/check': {
    /** Check */
    get: operations['check_api_rest_auth_check_get'];
  };
  '/api/rest/auth/logout': {
    /** Logout */
    delete: operations['logout_api_rest_auth_logout_delete'];
  };
  '/api/rest/auth/oauth2/habr/authorize': {
    /** Authorize */
    get: operations['authorize_api_rest_auth_oauth2_habr_authorize_get'];
  };
  '/api/rest/auth/oauth2/habr/callback': {
    /** Callback */
    get: operations['callback_api_rest_auth_oauth2_habr_callback_get'];
  };
  '/api/rest/users/{user_id}': {
    /** Get User */
    get: operations['get_user_api_rest_users__user_id__get'];
    /** Update User */
    post: operations['update_user_api_rest_users__user_id__post'];
  };
  '/api/rest/users/{user_id}/avatar': {
    /** Get User Avatar */
    get: operations['get_user_avatar_api_rest_users__user_id__avatar_get'];
    /** Upload User Avatar */
    post: operations['upload_user_avatar_api_rest_users__user_id__avatar_post'];
    /** Delete User Avatar */
    delete: operations['delete_user_avatar_api_rest_users__user_id__avatar_delete'];
  };
  '/api/rest/users/{user_id}/skills': {
    /** Get User Skills */
    get: operations['get_user_skills_api_rest_users__user_id__skills_get'];
    /** Update User Skills */
    post: operations['update_user_skills_api_rest_users__user_id__skills_post'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** AuthorizeResponse */
    AuthorizeResponse: {
      user: components['schemas']['UserResponse'];
      /** Access Token */
      access_token: string;
      /** Refresh Token */
      refresh_token: string;
    };
    /** Body_upload_user_avatar_api_rest_users__user_id__avatar_post */
    Body_upload_user_avatar_api_rest_users__user_id__avatar_post: {
      /**
       * Avatar
       * Format: binary
       */
      avatar: string;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components['schemas']['ValidationError'][];
    };
    /** HealthResponse */
    HealthResponse: {
      /** Version */
      version: string;
      /** Name */
      name: string;
    };
    /** JWTData */
    JWTData: {
      /**
       * User Id
       * Format: uuid
       */
      user_id: string;
      /** Is Activated */
      is_activated: boolean;
    };
    /** UserResponse */
    UserResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Email */
      email: string | null;
      /** First Name */
      first_name: string | null;
      /** Last Name */
      last_name: string | null;
      /** Is Activated */
      is_activated: boolean;
      /** About */
      about: string | null;
      /** Main Specialization Id */
      main_specialization_id: string | null;
      /** Secondary Specialization Id */
      secondary_specialization_id: string | null;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
    };
    /** UserUpdateRequest */
    UserUpdateRequest: {
      /** First Name */
      first_name: string;
      /** Last Name */
      last_name: string;
      /** About */
      about: string | null;
      /** Main Specialization Id */
      main_specialization_id: string | null;
      /** Secondary Specialization Id */
      secondary_specialization_id: string | null;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /** Health */
  health_health_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['HealthResponse'];
        };
      };
    };
  };
  /** Check */
  check_api_rest_auth_check_get: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['JWTData'] | null;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Logout */
  logout_api_rest_auth_logout_delete: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Authorize */
  authorize_api_rest_auth_oauth2_habr_authorize_get: {
    parameters: {
      query?: {
        redirect_url?: string | null;
      };
      header?: {
        Authorization?: string | null;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      307: {
        content: never;
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Callback */
  callback_api_rest_auth_oauth2_habr_callback_get: {
    parameters: {
      query: {
        state: string;
        code: string;
      };
      header?: {
        Authorization?: string | null;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['AuthorizeResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get User */
  get_user_api_rest_users__user_id__get: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['UserResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Update User */
  update_user_api_rest_users__user_id__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UserUpdateRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['UserResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get User Avatar */
  get_user_avatar_api_rest_users__user_id__avatar_get: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'image/*': string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Upload User Avatar */
  upload_user_avatar_api_rest_users__user_id__avatar_post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['Body_upload_user_avatar_api_rest_users__user_id__avatar_post'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['UserResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Delete User Avatar */
  delete_user_avatar_api_rest_users__user_id__avatar_delete: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['UserResponse'];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Get User Skills */
  get_user_skills_api_rest_users__user_id__skills_get: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': string[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
  /** Update User Skills */
  update_user_skills_api_rest_users__user_id__skills_post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        user_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': string[];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': string[];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          'application/json': components['schemas']['HTTPValidationError'];
        };
      };
    };
  };
}
