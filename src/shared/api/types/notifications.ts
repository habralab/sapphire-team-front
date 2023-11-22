/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health */
    get: operations['health_health_get'];
  };
  '/api/rest/notifications': {
    /** Get Notifications */
    get: operations['get_notifications_api_rest_notifications_get'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
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
    /** Notification */
    Notification: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Type */
      type: string;
      /**
       * Recipient Id
       * Format: uuid
       */
      recipient_id: string;
      /** Data */
      data: Record<string, never>;
      /** Is Read */
      is_read: boolean;
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
    /** NotificationListModel */
    NotificationListModel: {
      /** Data */
      data: components['schemas']['Notification'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
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
  /** Get Notifications */
  get_notifications_api_rest_notifications_get: {
    parameters: {
      query?: {
        is_read?: unknown;
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
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['NotificationListModel'];
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
