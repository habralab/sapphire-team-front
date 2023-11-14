/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health */
    get: operations['health_health_get'];
  };
  '/api/rest/skills/': {
    /** Get Skills */
    get: operations['get_skills_api_rest_skills__get'];
  };
  '/api/rest/specializations/': {
    /** Get Specializations */
    get: operations['get_specializations_api_rest_specializations__get'];
  };
  '/api/rest/spec-groups/': {
    /** Get Specialization Groups */
    get: operations['get_specialization_groups_api_rest_spec_groups__get'];
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
    /** SkillListResponse */
    SkillListResponse: {
      /** Data */
      data: components['schemas']['SkillResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
    };
    /** SkillResponse */
    SkillResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Name */
      name: string | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
    };
    /** SpecializationGroupListResponse */
    SpecializationGroupListResponse: {
      /** Data */
      data: components['schemas']['SpecializationGroupResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
    };
    /** SpecializationGroupResponse */
    SpecializationGroupResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Name */
      name: string | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
    };
    /** SpecializationListResponse */
    SpecializationListResponse: {
      /** Data */
      data: components['schemas']['SpecializationResponse'][];
      /** Page */
      page: number;
      /** Per Page */
      per_page: number;
      /** Total Pages */
      total_pages?: number | null;
      /** Total Items */
      total_items?: number | null;
    };
    /** SpecializationResponse */
    SpecializationResponse: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Name */
      name: string | null;
      /** Group Id */
      group_id: string | null;
      /**
       * Created At
       * Format: date-time
       */
      created_at: string;
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
  /** Get Skills */
  get_skills_api_rest_skills__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
        query_text?: unknown;
        id?: unknown;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['SkillListResponse'];
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
  /** Get Specializations */
  get_specializations_api_rest_specializations__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
        query_text?: unknown;
        group_id?: unknown;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['SpecializationListResponse'];
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
  /** Get Specialization Groups */
  get_specialization_groups_api_rest_spec_groups__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Number of items per page */
        per_page?: number;
        query_text?: unknown;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['SpecializationGroupListResponse'];
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
