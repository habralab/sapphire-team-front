/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health */
    get: operations['health_health_get'];
  };
  '/api/rest/chats/': {
    /** Get Chats */
    get: operations['get_chats_api_rest_chats__get'];
  };
  '/api/rest/chats/{chat_id}': {
    /** Get Chat */
    get: operations['get_chat_api_rest_chats__chat_id__get'];
  };
  '/api/rest/chats/{chat_id}/messages/': {
    /** Get Messages */
    get: operations['get_messages_api_rest_chats__chat_id__messages__get'];
    /** Create Message */
    post: operations['create_message_api_rest_chats__chat_id__messages__post'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** ChatListResponse */
    ChatListResponse: {
      /** Data */
      data: components['schemas']['ChatResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages: number;
      /** Total Items */
      total_items: number;
    };
    /** ChatResponse */
    ChatResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Is Personal */
      is_personal: boolean;
      /** Members */
      members: string[];
      last_message: components['schemas']['MessageResponse'] | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
    };
    /** CreateMessageRequest */
    CreateMessageRequest: {
      /** Text */
      text: string;
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
    /** MessageListResponse */
    MessageListResponse: {
      /** Data */
      data: components['schemas']['MessageResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages: number;
      /** Total Items */
      total_items: number;
    };
    /** MessageResponse */
    MessageResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /**
       * Chat Id
       * Format: uuid
       */
      chat_id: string;
      /**
       * User Id
       * Format: uuid
       */
      user_id: string;
      /** Text */
      text: string;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
      /**
       * Updated At
       * Format: date-time
       */
      updated_at: string;
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
  /** Get Chats */
  get_chats_api_rest_chats__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
      };
      header?: {
        Authorization?: string | null;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody?: {
      content: {
        'application/json': unknown;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['ChatListResponse'];
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
  /** Get Chat */
  get_chat_api_rest_chats__chat_id__get: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        chat_id: string;
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
  /** Get Messages */
  get_messages_api_rest_chats__chat_id__messages__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
      };
      header?: {
        Authorization?: string | null;
      };
      path: {
        chat_id: string;
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
          'application/json': components['schemas']['MessageListResponse'];
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
  /** Create Message */
  create_message_api_rest_chats__chat_id__messages__post: {
    parameters: {
      header?: {
        Authorization?: string | null;
      };
      path: {
        chat_id: string;
      };
      cookie?: {
        access_token?: string | null;
        refresh_token?: string | null;
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateMessageRequest'];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['MessageResponse'];
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
